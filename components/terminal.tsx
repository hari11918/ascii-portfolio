"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { TerminalIcon, User, Briefcase, Code, Mail, GraduationCap, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AboutSection } from "@/components/sections/about-section"
import { EducationSection } from "@/components/sections/education-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { ContactSection } from "@/components/sections/contact-section"
import { AsciiArt } from "@/components/ascii-art"

type Command = {
  input: string
  output: React.ReactNode
  timestamp: Date
}

export default function Terminal() {
  const [input, setInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<Command[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [currentSection, setCurrentSection] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }

  useEffect(() => {
    // Focus input on mount and when clicking anywhere in the terminal
    inputRef.current?.focus()

    const handleClick = () => {
      inputRef.current?.focus()
    }

    document.addEventListener("click", handleClick)

    // Add welcome message
    setCommandHistory([
      {
        input: "welcome",
        output: (
          <div className="space-y-2">
            <AsciiArt art="welcome" />
            <p>
              Welcome to Rithani's portfolio! Type{" "}
              <span className="text-primary font-bold">help</span> to see available commands.
            </p>
          </div>
        ),
        timestamp: new Date(),
      },
    ])

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [commandHistory, currentSection, scrollToBottom])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const command = input.trim().toLowerCase()
    let output: React.ReactNode

    // Process command
    switch (command) {
      case "help":
        output = (
          <div className="space-y-2">
            <p className="font-bold">Available commands:</p>
            <ul className="space-y-1">
              <li>
                <span className="text-primary">about</span> - Learn about Rithani
              </li>
              <li>
                <span className="text-primary">education</span> - View educational background
              </li>
              <li>
                <span className="text-primary">skills</span> - See technical skills
              </li>
              <li>
                <span className="text-primary">experience</span> - View work experience
              </li>
              <li>
                <span className="text-primary">projects</span> - View projects
              </li>
              <li>
                <span className="text-primary">certifications</span> - View certifications and competitions
              </li>
              <li>
                <span className="text-primary">contact</span> - Get contact information
              </li>
              <li>
                <span className="text-primary">clear</span> - Clear the terminal
              </li>
              <li>
                <span className="text-primary">help</span> - Show this help message
              </li>
              <li>
                <span className="text-primary">scan</span> - Run a security scan
              </li>
            </ul>
          </div>
        )
        setCurrentSection(null)
        break

      case "about":
        output = <AboutSection />
        setCurrentSection("about")
        break

      case "education":
        output = <EducationSection />
        setCurrentSection("education")
        break

      case "skills":
        output = <SkillsSection />
        setCurrentSection("skills")
        break

      case "experience":
        output = <ExperienceSection />
        setCurrentSection("experience")
        break

      case "projects":
        output = <ProjectsSection />
        setCurrentSection("projects")
        break

      case "certifications":
        output = <CertificationsSection />
        setCurrentSection("certifications")
        break

      case "contact":
        output = <ContactSection />
        setCurrentSection("contact")
        break

      case "clear":
        setCommandHistory([])
        setCurrentSection(null)
        setInput("")
        return

      case "scan":
        output = (
          <div className="space-y-2">
            <p>Running security scan...</p>
            <pre className="text-xs my-2 text-muted-foreground">
              {`
[+] Scanning system for vulnerabilities...
[+] Checking for open ports...
[+] Analyzing network traffic...
[+] Inspecting file integrity...
[+] Scanning for malware signatures...
[+] Checking for suspicious processes...
`}
            </pre>
            <p className="text-green-500">Scan complete! No threats detected. System secure.</p>
          </div>
        )
        setCurrentSection(null)
        break

      default:
        output = (
          <p>
            Command not found: {command}. Type <span className="text-primary font-bold">help</span> to see available
            commands.
          </p>
        )
        setCurrentSection(null)
    }

    // Add command to history
    setCommandHistory((prev) => [
      ...prev,
      {
        input: command,
        output,
        timestamp: new Date(),
      },
    ])

    // Reset input and history index
    setInput("")
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle up/down arrows for command history navigation
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex].input)
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex].input)
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-black/70 backdrop-blur-md border border-primary/30 rounded-t-md p-2 flex items-center">
        <TerminalIcon className="h-4 w-4 text-primary mr-2" />
        <span className="text-sm font-mono">Rithani@DataAnalyst ~ {currentSection ? `/${currentSection}` : ""}</span>
      </div>

      <div
        ref={terminalRef}
        className="flex-1 bg-black/60 backdrop-blur-md border-x border-primary/30 p-4 overflow-y-auto font-mono text-sm"
      >
        {commandHistory.map((cmd, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center text-muted-foreground">
              <span className="text-primary mr-2">$</span>
              <span>{cmd.input}</span>
            </div>
            <div className="mt-1 ml-4">{cmd.output}</div>
          </div>
        ))}
      </div>

      <div className="bg-black/70 backdrop-blur-md border border-primary/30 rounded-b-md p-2">
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-primary mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none font-mono text-foreground"
            aria-label="Terminal input"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>

      <nav className="mt-4 flex flex-wrap justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("about")
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }}
          className="text-xs bg-black/50 backdrop-blur-sm hover:bg-black/70"
        >
          <User className="h-3 w-3 mr-1" />
          About
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("education")
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }}
          className="text-xs"
        >
          <GraduationCap className="h-3 w-3 mr-1" />
          Education
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("skills")
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }}
          className="text-xs"
        >
          <Shield className="h-3 w-3 mr-1" />
          Skills
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("experience")
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }}
          className="text-xs"
        >
          <Briefcase className="h-3 w-3 mr-1" />
          Experience
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("projects")
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }}
          className="text-xs"
        >
          <Code className="h-3 w-3 mr-1" />
          Projects
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("certifications")
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }}
          className="text-xs"
        >
          <Award className="h-3 w-3 mr-1" />
          Certifications
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setInput("contact")
            handleSubmit({ preventDefault: () => {} } as React.FormEvent)
          }}
          className="text-xs"
        >
          <Mail className="h-3 w-3 mr-1" />
          Contact
        </Button>
      </nav>
    </div>
  )
}

