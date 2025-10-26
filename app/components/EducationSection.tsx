'use client';

import { Award, BookOpen } from 'lucide-react';

export default function EducationSection() {
	const education = [
    {
      degree: "Bachelor of Computer Science",
      field: "Computer Science",
      institution: "Alexandria University",
      year: "2023 - Now",
      description: "Specialized in human-centered design, interaction design, and visual communication"
    },
    {
      degree: "Professional Certificate",
      field: "UI/UX Design",
      institution: "Route",
      year: "2024",
      description: "Comprehensive training in user research, prototyping, and usability testing"
    }
  ];

  const skills = [
    { name: "Figma", level: 95 },
    { name: "Adobe XD", level: 90 },
    { name: "User Research", level: 88 },
    { name: "Prototyping", level: 92 },
    { name: "Design Systems", level: 85 },
    { name: "Usability Testing", level: 87 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-600">Education & Skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Background & Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100 hover:shadow-xl transition-all duration-300">
                <Award className="w-10 h-10 text-pink-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                <p className="text-lg text-purple-600 font-semibold mb-1">{edu.field}</p>
                <p className="text-gray-600 mb-2">{edu.institution}</p>
                <p className="text-sm text-pink-500 font-medium mb-3">{edu.year}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 border border-rose-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Core Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-pink-500 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-white rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}