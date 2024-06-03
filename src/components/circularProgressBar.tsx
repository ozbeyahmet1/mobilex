interface CircularProgressBarProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
}

export default function CircularProgressBar({ progress, size = 100, strokeWidth = 10 }: CircularProgressBarProps) {
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        className="text-gray-300"
        stroke="currentColor"
        fill="transparent"
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        className="text-blue"
        stroke="currentColor"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
}
