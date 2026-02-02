import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  variant = "full",
  className,
  width = 150,
  height = 50,
}: LogoProps) {
  const src =
    variant === "full"
      ? "/assets/logos/logo.svg"
      : "/assets/logos/logo-rounded.png";

  return (
    <Link
      href="/"
      className={`relative block ${className}`}
      aria-label="Roost and Roast Home"
    >
      <Image
        src={src}
        alt="Roost and Roast Logo"
        width={width}
        height={height}
        className="w-auto h-auto object-contain"
        priority
      />
    </Link>
  );
}
