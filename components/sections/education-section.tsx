import { AsciiArt } from "@/components/ascii-art"

export function EducationSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="education" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">University at Buffalo, The State University of New York, New York, NY</h3>
          <p className="text-sm">Master of Science in Engineering Science Data Science | GPA: 3.50</p>
          <p className="text-xs text-muted-foreground">Feb 2023</p>
          <div className="mt-2">
            <h4 className="text-sm font-semibold">Relevant Coursework:</h4>
            <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
              <li>Statistical Data Mining</li>
              <li>Probability Theory</li>
              <li>Data Models & Query Language</li>
              <li>Machine Learning</li>
              <li>Introduction to Artificial Intelligence</li>
              <li>Data Structures & Algorithms</li>
            </ul>
          </div>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Anna University, Chennai, India</h3>
          <p className="text-sm">Bachelor of Engineering in Computer Science | GPA: 3.61</p>
          <p className="text-xs text-muted-foreground">June 2021</p>
          <div className="mt-2">
            <h4 className="text-sm font-semibold">Relevant Coursework:</h4>
            <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
              <li>Data Structures</li>
              <li>Design & Analysis of Algorithms</li>
              <li>Software Engineering</li>
              <li>Big Data</li>
              <li>Cloud Computing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

