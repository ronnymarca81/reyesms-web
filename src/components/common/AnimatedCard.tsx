const AnimatedCard: React.FC<{ children: React.ReactNode; delay?: string }> = ({
  children,
  delay = "0s"
}) => (
  <div
    className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    style={{ animationDelay: delay }}
  >
    {children}
  </div>
);

export default AnimatedCard;
