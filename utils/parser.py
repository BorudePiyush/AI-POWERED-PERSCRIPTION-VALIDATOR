import spacy

nlp = spacy.load("en_core_web_sm")

def extract_medicines(text):
    doc = nlp(text)
    meds = []
    for ent in doc.ents:
        if ent.label_ in ["PRODUCT", "ORG", "GPE", "DRUG"]:
            meds.append(ent.text.lower())
    return list(set(meds))

