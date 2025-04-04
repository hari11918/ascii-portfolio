import { AsciiArt } from "@/components/ascii-art"

export function ExperienceSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="experience" />

      <div className="space-y-6">
        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Data Analyst</h3>
            <p className="text-xs text-muted-foreground">
            Truist Insurance Holdings, Atlanta, Georgia | March 2024 - Present
            </p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>
            Kensington Vanguard National Land Services - Built Power BI reports using DAX, Power Query M language
to analyze residential, commercial clients; Designed 30+ tailored visualizations that identified operational improvements.
            </li>
            <li>Leveraged SSMS to write SQL queries using CTEs, joins, & indexing enabling detailed analysis for business reporting.</li>
            <li>McGriff - Automated data validation and text matching using Excel Macros, Vlookup and pivot; conducted A/B
            testing and statistical analysis on policyholder behavior, leading to a 20% improvement in customer retention strategies</li>
            <li>Built ETL pipelines with Azure Data Factory, extracting data from Blob Storage and loading into Azure SQL Server;
            used Python and LLM for text analysis, driving precise policy-related insights.</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Statistical Data Mining Analyst</h3>
            <p className="text-xs text-muted-foreground">Technical Consulting & Research, Weston, Connecticut | March 2023 - February 2024</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>Implemented a machine learning anomaly detection system in Microsoft Azure for Auth0 logs, reducing security
            incidents by 30% through predictive analytics and log pattern recognition.</li>
            <li>
            Collaborated and Analyzed user behavior in Auth0 logs, achieving a 25% accuracy improvement in authentication.
            </li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Data Scientist Intern</h3>
            <p className="text-xs text-muted-foreground">
            Tekion Corp, San Francisco, California | May 2022 - August 2022
            </p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>
            Integrated multiple data sources and reduced daily data retrieval time by 2 hours through optimized queries.
            </li>
            <li>Developed an NLP pipeline achieving 94% accuracy, utilizing NLTK, KNN, and cosine similarity to automate the
            classification of vehicle service descriptions replacing manual tasks by 60%, improving workflow automation.</li>
          </ul>
        </div>

        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Data Analyst Intern</h3>
            <p className="text-xs text-muted-foreground">Quantium, Virtual Internship | September 2020 - October 2020</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>
            Conducted data analysis using Python on customer purchasing behavior data across 3 regions, resulting in
            recommendations for potential revenue growth opportunities.
            </li>
            <li>Employed statistical analysis techniques such as hypothesis testing and regression analysis to identify customer
purchasing behavior and patterns; resulting in a projected revenue increase of 15%.
</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

