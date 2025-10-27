'use client';

import { Award, BookOpen, Medal, Briefcase } from 'lucide-react';

export default function EducationSection() {
  const education = {
    degree: "Bachelor of Computer Science",
    field: "Computer Science",
    institution: "Alexandria University",
    year: "2023 - Now",
    description:
      "Specialized in human-centered design, interaction design, and visual communication.",
  };

  const certificates = [
    {
      title: "Professional Certificate in UI/UX Design",
      institution: "Route",
      year: "2024",
      description:
        "Comprehensive training in user research, prototyping, and usability testing.",
    },
    {
      title: "UX Design Advanced Course",
      institution: "Route",
      year: "2024",
      description:
        "Enhanced design thinking, prototyping, and usability testing skills.",
    },
  ];

  const experience = {
    title: "UI/UX Intern",
    company: "Sputnik Academy",
    year: "2025 - Now",
    description:
      "Assisted in wireframing, usability testing, and improving design systems for digital products.",
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-50 rounded-full mb-3">
              <BookOpen className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-600">
                Education, Certificates & Experience
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Background & Expertise
            </h2>
          </div>

          {/* Education & Certificates */}
          <div className="grid md:grid-cols-2 gap-10 items-stretch mb-20">
            {/* Education Card */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <Award className="w-10 h-10 text-pink-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {education.degree}
                </h3>
                <p className="text-lg text-purple-600 font-semibold mb-1">
                  {education.field}
                </p>
                <p className="text-gray-600 mb-1">{education.institution}</p>
                <p className="text-sm text-pink-500 font-medium mb-3">
                  {education.year}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {education.description}
                </p>
              </div>
            </div>

            {/* Certificates Column (staggered layout) */}
            <div className="relative flex flex-col justify-between">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 border border-rose-100 shadow-sm hover:shadow-md transition-all duration-300 w-full md:w-[85%] ${
                    index === 1 ? 'self-start mt-6' : 'self-start'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Medal className="w-6 h-6 text-pink-500" />
                    <h4 className="text-lg font-semibold text-gray-800">
                      {cert.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">{cert.institution}</p>
                  <p className="text-xs text-pink-500 font-medium mb-2">
                    {cert.year}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section (centered) */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Experience
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-10 border border-rose-100 hover:shadow-xl transition-all duration-300">
                <Briefcase className="w-12 h-12 text-pink-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {experience.title}
                </h3>
                <p className="text-gray-600 mb-1">{experience.company}</p>
                <p className="text-sm text-pink-500 font-medium mb-3">
                  {experience.year}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
