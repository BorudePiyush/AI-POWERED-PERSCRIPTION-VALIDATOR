import streamlit as st
from utils.ocr import extract_text
from utils.parser import extract_medicines
from utils.interaction import check_interactions
from PIL import Image
import os

st.set_page_config(page_title="MedLens - Prescription Validator", layout="centered")

st.title("💊 MedLens")
st.markdown("""
AI-powered Prescription Validator & Drug Interaction Checker.  
Upload a photo of your prescription to get started.
""")

# File uploader
uploaded_file = st.file_uploader("📷 Upload Prescription Image (JPG, PNG)", type=["jpg", "jpeg", "png"])

if uploaded_file:
    # Save image to temp file
    temp_image_path = "temp.jpg"
    with open(temp_image_path, "wb") as f:
        f.write(uploaded_file.read())

    # Display image
    st.image(temp_image_path, caption="🖼️ Uploaded Prescription", use_container_width=True)

    with st.spinner("🔍 Extracting and analyzing prescription..."):
        # Step 1: OCR
        extracted_text = extract_text(temp_image_path)
        st.subheader("📝 Extracted Text")
        st.code(extracted_text, language="text")

        # Step 2: NLP - Extract medicines
        medicines = extract_medicines(extracted_text)
        st.subheader("💊 Detected Medicines")
        if medicines:
            st.success(", ".join(medicines))
        else:
            st.warning("No medicines detected. Try uploading a clearer prescription.")

        # Step 3: Check for drug interactions
        if medicines:
            conflicts = check_interactions(medicines)
            st.subheader("⚠️ Drug Interaction Warnings")
            if conflicts:
                st.error("⚠️ Dangerous interactions detected:")
                for m1, m2 in conflicts:
                    st.write(f"🔴 **{m1.capitalize()}** may interact with **{m2.capitalize()}**")
            else:
                st.success("✅ No dangerous drug interactions found.")

# Footer
st.markdown("---")
st.caption("Built with ❤️ using Python, Streamlit, EasyOCR, and spaCy. For hackathons and health tech innovation.")
