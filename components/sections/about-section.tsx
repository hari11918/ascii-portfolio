import { AsciiArt } from "@/components/ascii-art";
import { AsciiPortraitComparison } from "@/components/ascii-portrait-comparison";

export function AboutSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="about" />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/5">
          <AsciiPortraitComparison />
          <div className="text-center text-xs text-muted-foreground mt-2">
          Rithani Rajeswari Selvaraj
            <br />
            <span className="text-primary/60">Data Analyst</span>
          </div>
        </div>

        <div className="space-y-3 md:w-3/5">
          <p>
            Hello! I'm Rithani Rajeswari Selvaraj, a data analyst specializing
            in data visualization, statistical analysis, and transforming raw
            data into actionable insights to support business decision-making.
          </p>

          <p>
            I have hands-on experience with SQL, Python, Power BI, and Azure
            tools to uncover insights, automate workflows, and drive strategic
            decision-making across domains including insurance, tech, and
            consulting.
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Personal Bio:</h3>
            <div className="space-y-2 text-sm">
              <p>
                I'm someone who thrives on challenges — whenever someone says
                something is impossible, my first thought is always: "how can I
                make this possible?" That mindset fuels both my personal and
                professional journey.
              </p>

              <p>
                I'm passionate about sports and physical fitness. badminton is
                one of my favorite activities, and I make it a point to hit the
                gym for at least four hour every week.
              </p>

              <p>
                Staying active helps me maintain a balance between physical
                energy and mental clarity — which comes in handy when I’m deep
                in data wrangling, debugging queries, or building models.
              </p>

              <p>
                On the badminton court, I play a defensive style — quick on my
                feet, anticipating opponents' moves, and returning even the
                toughest shots. That same mindset shows up in my work: analyzing
                patterns, spotting anomalies, and delivering reliable results
                under pressure.
              </p>

              <p>
                Whether it's cleaning complex datasets, identifying trends, or
                crafting visualizations, I’m driven by curiosity and the desire
                to turn data into insight. I’m passionate about leveraging data
                to solve real-world problems and support smarter
                decision-making.
              </p>
            </div>
          </div>

          <p>
          I'm passionate about using data-driven solutions to solve complex problems, from building predictive models to developing interactive dashboards that empower stakeholders to make smarter, faster decisions
          </p>

          <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-2">Quick Facts:</h3>
            <ul className="space-y-1">
              <li>
                <span className="text-muted-foreground">Location:</span> Atlanta, GA
              </li>
              <li>
                <span className="text-muted-foreground">Education:</span> M.S.
                in Engineering Science Data Science, University at Buffalo
              </li>
              <li>
                <span className="text-muted-foreground">Specialty:</span> Power BI, SQL, A/B Testing, ETL Pipelines, Predictive Modeling
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
