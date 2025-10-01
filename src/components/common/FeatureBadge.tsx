export const FeatureBadge: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}> = ({ icon, title, description, color }) => (
  <div
    className={`relative overflow-hidden rounded-2xl p-15 ${color} text-white group cursor-pointer`}
  >
    <div className="relative z-10">
      <div className="flex flex-col items-center justify-center gap-3 mb-3 ">
        {icon}
        <p className="text-xl opacity-90 leading-relaxed">{description}</p>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
    </div>
    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
  </div>
);
