import { AsciiArt } from "@/components/ascii-art"

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Customer Churn Prediction</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
 +----------------+     +--------------------+     +---------------+
  | Customer Data  | --> | Data Preprocessing | --> | ML Algorithms |
  +----------------+     +--------------------+     +---------------+
           |                      |                         |
           v                      v                         |
     +-----------+        +---------------+           +-------------+
     | SMOTE for |        | Feature       |           | Logistic,   |
     | balancing |        | Engineering   |           | XGBoost     |
     +-----------+        +---------------+           +-------------+
                                        |
                                        v
                                +------------------+
                                | Accuracy: 85%     |
                                +------------------+
`}
          </pre>
          <p className="text-sm mb-2">
          <li>Led a 4-member team in developing ML model for bank customer churn prediction, leveraged customer information and
          transaction data, applying the SMOTE technique to address imbalanced data.</li>
          <li>Implemented and compared logistic regression, decision tree and XGBoost for churn prediction, attaining 85% accuracy</li>
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Python, Pandas, scikit-learn, XGBoost, SMOTE
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">ANZ Project</h3>
          <pre className="text-xs my-2 text-muted-foreground">
            {`
   +------------------+     +--------------------+     +------------------+
  | Transaction Data | --> | EDA + Feature Eng. | --> | Random Forest ML |
  +------------------+     +--------------------+     +------------------+
           |                                                   |
           v                                                   v
    +-----------------+                             +----------------------+
    | SQL Data Source |                             | 95% Prediction Acc.  |
    +-----------------+                             +----------------------+
`}
          </pre>
          <p className="text-sm mb-2">
            <li>Analyzed transaction data of 10,000 ANZ customers using Python and SQL. Developed a 95% accurate Random Forest
            model to predict future transaction amounts, enhancing personalization and boosting customer satisfaction.</li>
            <li>Created interactive KPI Tableau dashboards, driving a 30% increase in stakeholder engagement.
            </li>
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies:  Python, SQL, Random Forest, Tableau
          </p>
        </div>
      </div>
    </div>
  )
}

