interface ServiceData {
  id: number;
  image: string;
  title: string;
  description: string;
}
    
// Services data - could come from props, API, or context

export const defaultServicesData: ServiceData[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Success Strategies",
    description:
      "Develop comprehensive success strategies tailored to your unique goals. Our expert coaches help you identify opportunities, overcome obstacles, and create actionable plans for sustainable growth."
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    title: "Leadership Coaching",
    description:
      "Enhance your leadership capabilities with personalized coaching sessions. Learn to inspire teams, make strategic decisions, and drive organizational change with confidence and clarity."
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Performance Optimization",
    description:
      "Maximize your potential with data-driven performance optimization strategies. We analyze your current performance and implement targeted improvements for measurable results."
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    title: "Career Advancement",
    description:
      "Accelerate your career growth with strategic planning and skill development. Our coaches provide guidance on networking, professional branding, and career transition strategies."
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Team Empowerment",
    description:
      "Build high-performing teams through effective communication, collaboration strategies, and leadership development. Transform your team dynamics for enhanced productivity."
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Business Mastery",
    description:
      "Master the fundamentals of business success with comprehensive training programs. From strategic planning to execution, develop the skills needed to thrive in today's market."
  }
];
