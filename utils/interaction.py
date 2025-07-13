import json
import os

def load_interaction_db():
    path = os.path.join(os.path.dirname(__file__), '../drug_interactions.json')
    with open(path, "r") as f:
        return json.load(f)

interaction_db = load_interaction_db()

def check_interactions(meds):
    meds = [med.lower() for med in meds]
    conflicts = []
    for i in range(len(meds)):
        for j in range(i + 1, len(meds)):
            m1, m2 = meds[i], meds[j]
            if m2 in interaction_db.get(m1, []) or m1 in interaction_db.get(m2, []):
                conflicts.append((m1, m2))
    return conflicts
