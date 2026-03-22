"use client";

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Generate breadcrumb schema for SEO
 * @deprecated Use Breadcrumb.tsx component instead for built-in Schema.org support
 */
function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Breadcrumbs component - Legacy version
 * @deprecated Use Breadcrumb.tsx component instead for built-in Schema.org support and better styling
 * 
 * This component is kept for backward compatibility.
 * It now includes Schema.org BreadcrumbList structured data.
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Convert items to schema format
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: item.href.startsWith("http") ? item.href : `https://townmedialabs.com${item.href}`,
  }));
  
  const schema = generateBreadcrumbSchema(schemaItems);

  return (
    <>
      {/* Schema.org BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* Visual breadcrumb navigation */}
      <nav aria-label="Breadcrumb" className="border-l-2 border-[#ff4500]/30 pl-3">
        <ol className="flex items-center gap-1.5 flex-wrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isCurrent = !item.href || isLast;

            return (
              <li key={index} className="flex items-center gap-1.5 text-[11px]">
                {index > 0 && (
                  <span className="text-white/20 select-none" aria-hidden="true">
                    /
                  </span>
                )}
                {isCurrent ? (
                  // Current/Active page - styled with orange accent (#ff4500)
                  <span className="text-[#ff4500] font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white/30 transition-colors duration-200 hover:text-white/60"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
