import { AsciiArt } from "@/components/ascii-art"

export function SkillsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="skills" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2">Data Analysis</h3>
          <div className="space-y-2">
            <SkillBar name="Python (Pandas, NumPy)" percentage={85} />
            <SkillBar name="R" percentage={80} />
            <SkillBar name="Tableau" percentage={75} />
            <SkillBar name="Power BI (DAX)" percentage={90} />
            <SkillBar name="Excel" percentage={85} />
            <SkillBar name="Matplotlib" percentage={80} />
            <SkillBar name="Plotly" percentage={80} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Database Management</h3>
          <div className="space-y-2">
            <SkillBar name="MySQL" percentage={90} />
            <SkillBar name="PostgreSQL" percentage={85} />
            <SkillBar name="MongoDB" percentage={90} />
            <SkillBar name="MS SQL Server" percentage={85} />
            <SkillBar name="SSMS" percentage={80} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Cloud Platforms</h3>
          <div className="space-y-2">
            <SkillBar name="AWS (S3, EC2, Redshift)" percentage={75} />
            <SkillBar name="Azure (ADF, Blob Storage)" percentage={85} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Statistical Modeling</h3>
          <div className="space-y-2">
            <SkillBar name="A/B Testing" percentage={90} />
            <SkillBar name="Exploratory Data Analysis" percentage={85} />
            <SkillBar name="Feature Selection" percentage={85} />
            <SkillBar name="ANOVA" percentage={80} />
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-2">Machine Learning</h3>
          <div className="space-y-2">
            <SkillBar name="TensorFlow" percentage={90} />
            <SkillBar name="PyTorch" percentage={85} />
            <SkillBar name="scikit-learn" percentage={80} />
            <SkillBar name="Keras" percentage={85} />
            <SkillBar name="Spark MLlib" percentage={85} />
            <SkillBar name="SVM" percentage={85} />
            <SkillBar name="Classification" percentage={85} />
            <SkillBar name="Clustering" percentage={85} />
            <SkillBar name="LLM" percentage={85} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}

