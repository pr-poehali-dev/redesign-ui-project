export function PortfolioShowcase() {
  const portfolioItems = [
    {
      image: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/7449c507-1b3d-4c52-8458-d498d7e28d49.jpg",
    },
    {
      image: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/57af6ebb-ad6c-4da8-88ad-70e8002bfa17.jpg",
    },
    {
      image: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/aee3b69c-6a4c-430a-b0f6-a2ca5f34c187.jpg",
    },
    {
      image: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/435c3d1e-072e-478c-a30b-8eaeb3205e62.jpg",
    },
    {
      image: "https://cdn.poehali.dev/projects/5a3ff963-1afa-42c5-b129-615eec5d8ec8/files/5a1b0e90-0720-49fd-bec1-033ce780bd00.jpg",
    },
  ]

  return (
    <section className="pt-4 pb-20 overflow-hidden">
      <div className="relative flex">
        <div className="flex gap-6 animate-scroll-seamless">
          {portfolioItems.map((item, index) => (
            <div key={`set1-${index}`} className="flex-shrink-0 w-[600px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <img src={item.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-6 animate-scroll-seamless ml-6" aria-hidden="true">
          {portfolioItems.map((item, index) => (
            <div key={`set2-${index}`} className="flex-shrink-0 w-[600px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <img src={item.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}