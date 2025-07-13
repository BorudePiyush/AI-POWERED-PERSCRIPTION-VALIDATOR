🧠 AI-Powered Prescription Validator
🩺 Overview
AI-Powered Prescription Validator is a smart healthcare solution that uses artificial intelligence to analyze and validate handwritten or printed prescriptions. By leveraging Optical Character Recognition (OCR) and Natural Language Processing (NLP), the system checks prescriptions for:

Medicine name accuracy

Dosage compliance

Allergy/conflict detection

Illegibility issues

Duplicate entries

Expired or banned drugs

This tool helps doctors, pharmacists, and patients ensure that prescriptions are clear, correct, and safe.

🚀 Features
✅ Prescription text extraction using OCR (Tesseract or custom CNN)

🤖 NLP-based medicine name & dosage validation

🛑 Detection of:

Illegible or incomplete prescriptions

Drug conflicts / allergy alerts

Duplicate or conflicting medicines

🔍 Cross-referencing with a medicine database

📊 Generates validation reports or flags errors

🧬 Optional ML model to classify prescription quality


🛠️ Installation
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/AI-POWERED-PRESCRIPTION-VALIDATOR.git
cd AI-POWERED-PRESCRIPTION-VALIDATOR
2. Create a virtual environment and activate it
bash
Copy
Edit
python -m venv env
source env/bin/activate    # On Windows: env\Scripts\activate
3. Install dependencies
bash
Copy
Edit
pip install -r requirements.txt
🧪 Usage
Run locally (Streamlit or Flask)
If using Streamlit:

bash
Copy
Edit
streamlit run app.py
If using Flask:

bash
Copy
Edit
python app.py
