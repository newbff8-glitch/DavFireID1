function AnimatedButton({
  href,
  children,
  variant = "fire",
  className = "",
  external = false,
}: {
  href: string;
  children: string;
  variant?: "green" | "fire" | "light";
  className?: string;
  external?: boolean;
}) {
  const ringClass =
    variant === "green"
      ? "btn-ring-green"
      : variant === "light"
        ? "btn-ring-light"
        : "btn-ring-fire";

  const fillClass =
    variant === "green"
      ? "btn-fill-green"
      : variant === "light"
        ? "btn-fill-light"
        : "btn-fill-fire";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`btn-wrap ${className}`}
    >
      <span className={`btn-ring ${ringClass}`} />
      <span className={`btn-fill ${fillClass}`}>{children}</span>
    </a>
  );
}

export default function FFRandomStore() {
  const products = [
    {
      name: "Akun FF Random Basic",
      price: "Rp50.000",
      stock: 9999,
      desc: "Pilihan hemat buat kamu yang mau akun FF random dengan harga santai.",
      tag: "Paling Murah",
    },
    {
      name: "Akun FF Random Mid",
      price: "Rp85.000",
      stock: 9999,
      desc: "Cocok buat yang cari akun random lebih menarik dan worth it.",
      tag: "Paling Laku",
    },
    {
      name: "Akun FF Random Premium",
      price: "Rp155.000",
      stock: 9999,
      desc: "Level premium untuk pembeli yang mau akun FF random lebih mantap.",
      tag: "Terbatas",
    },
    {
      name: "Akun FF Random Premium Plus",
      price: "Rp350.000",
      stock: 9999,
      desc: "Pilihan terbaik buat yang mau akun random kualitas atas.",
      tag: "Best Seller",
    },
  ];

  const steps = [
    "Pilih akun FF random sesuai budget kamu.",
    "Kalau mau cepat bisa order lewat WhatsApp admin.",
    "Kalau mau COD bisa langsung checkout lewat toko Shopee.",
    "Order diproses setelah pembayaran atau checkout dikonfirmasi.",
  ];

  const faqs = [
    {
      q: "Apakah bisa dibuka di HP?",
      a: "Bisa, website ini nyaman dibuka lewat HP maupun desktop.",
    },
    {
      q: "Bisa COD?",
      a: "Bisa, untuk metode COD langsung lewat toko Shopee DavFireId.",
    },
    {
      q: "Apakah stok selalu ready?",
      a: "Selama produk masih tampil dan stok tersedia, berarti masih ready untuk dibeli.",
    },
  ];

  const whatsappUrl =
    "https://wa.me/628980263389?text=Halo%20admin%2C%20saya%20mau%20beli%20akun%20FF%20random";
  const shopeeUrl = "https://shopee.co.id/davfireid";

  return (
    <>
      <div
        className="min-h-screen text-white"
        style={{
          backgroundImage: "url('/davfire-top.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="min-h-screen bg-black/55">
          <header className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
              <div>
                <h1 className="text-lg font-bold tracking-wide sm:text-xl">DavFireId</h1>
                <p className="text-xs text-white/60 sm:text-sm">
                  Toko akun FF random terpercaya
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <AnimatedButton
                  href={shopeeUrl}
                  variant="fire"
                  external
                  className="min-w-[150px]"
                >
                  Shopee / COD
                </AnimatedButton>

                <AnimatedButton
                  href={whatsappUrl}
                  variant="green"
                  external
                  className="min-w-[190px]"
                >
                  Order via WhatsApp
                </AnimatedButton>
              </div>
            </div>
          </header>

          <main>
            <section className="relative overflow-hidden">
              <div className="mx-auto grid min-h-screen max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
                <div className="flex flex-col justify-center">
                  <span className="mb-4 inline-flex w-fit rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                    Ready stok setiap hari
                  </span>

                  <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                    Cari akun FF random?
                    <br />
                    Langsung pilih sesuai budget kamu
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                    DavFireId menyediakan akun FF random dengan beberapa pilihan harga.
                    Bisa order cepat lewat WhatsApp, dan buat buyer yang mau COD bisa
                    langsung checkout lewat Shopee.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <AnimatedButton href="#produk" variant="light">
                      Lihat Produk
                    </AnimatedButton>

                    <AnimatedButton href={shopeeUrl} variant="fire" external>
                      Beli via Shopee (COD)
                    </AnimatedButton>

                    <AnimatedButton href={whatsappUrl} variant="green" external>
                      Chat Admin
                    </AnimatedButton>
                  </div>
                </div>

                <div className="grid content-center gap-4">
                  <div className="rounded-[28px] bg-gradient-to-r from-orange-500/95 to-red-500/95 p-5 shadow-[0_0_28px_rgba(255,90,0,0.22)]">
                    <p className="text-xs uppercase tracking-widest text-white/80">
                      Produk unggulan
                    </p>
                    <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                      Akun FF Random Premium
                    </h3>
                    <p className="mt-2 text-sm text-white/90">
                      Order via WhatsApp atau checkout Shopee untuk COD.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[28px] bg-black/60 p-4 backdrop-blur-md">
                      <p className="text-xs text-white/50">Metode order</p>
                      <p className="mt-2 text-2xl font-bold text-white">WhatsApp</p>
                    </div>

                    <div className="rounded-[28px] bg-black/60 p-4 backdrop-blur-md">
                      <p className="text-xs text-white/50">Metode COD</p>
                      <p className="mt-2 text-2xl font-bold text-white">Shopee</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="relative bg-black/35">
              <section
                id="produk"
                className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12"
              >
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
                    Produk
                  </p>
                  <h3 className="mt-2 text-3xl font-black">Pilih akun FF random favoritmu</h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {products.map((product) => (
                    <div
                      key={product.name}
                      className="panel-outer transition duration-300 hover:-translate-y-1"
                    >
                      <div className="panel-ring panel-ring-fire panel-speed-normal" />
                      <div className="panel-inner p-5">
                        <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-orange-500/10 blur-3xl" />
                        <div className="absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-red-500/10 blur-3xl" />

                        <div className="relative z-10">
                          <div className="mb-4 flex items-center justify-between gap-3">
                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                              {product.tag}
                            </span>
                            <span className="text-xs text-white/50">Stok: {product.stock}</span>
                          </div>

                          <h4 className="text-2xl font-black">{product.name}</h4>
                          <p className="mt-2 text-sm leading-6 text-white/70">{product.desc}</p>
                          <p className="mt-6 text-3xl font-black">{product.price}</p>

                          <div className="mt-6 flex flex-col gap-3">
                            <AnimatedButton
                              href={`${whatsappUrl}%20-%20${encodeURIComponent(product.name)}`}
                              variant="green"
                              external
                              className="w-full"
                            >
                              Beli via WhatsApp
                            </AnimatedButton>

                            <AnimatedButton
                              href={shopeeUrl}
                              variant="fire"
                              external
                              className="w-full"
                            >
                              Beli via Shopee (COD)
                            </AnimatedButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="panel-outer">
                    <div className="panel-ring panel-ring-fire panel-speed-slow" />
                    <div className="panel-inner p-6">
                      <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
                        Cara Order
                      </p>
                      <h3 className="mt-2 text-3xl font-black">Langkah pembelian</h3>

                      <div className="mt-6 space-y-4">
                        {steps.map((step, index) => (
                          <div key={step} className="rounded-2xl bg-white/5 p-4">
                            <div className="flex items-start gap-4">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-neutral-900">
                                {index + 1}
                              </div>
                              <p className="text-sm leading-6 text-white/80">{step}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="panel-outer">
                    <div className="panel-ring panel-ring-fire panel-speed-slow" />
                    <div className="panel-inner p-6">
                      <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
                        FAQ
                      </p>
                      <h3 className="mt-2 text-3xl font-black">Pertanyaan umum</h3>

                      <div className="mt-6 space-y-4">
                        {faqs.map((item) => (
                          <div key={item.q} className="rounded-2xl bg-white/5 p-4">
                            <h4 className="font-bold">{item.q}</h4>
                            <p className="mt-2 text-sm leading-6 text-white/70">{item.a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="relative z-10 mx-auto max-w-6xl px-4 pb-16 sm:px-6">
                <div className="panel-outer">
                  <div className="panel-ring panel-ring-fire panel-speed-slow" />
                  <div className="panel-inner p-8 text-center shadow-2xl">
                    <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
                      DavFireId
                    </p>
                    <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                      Mau order cepat atau checkout COD?
                    </h3>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                      Untuk order cepat bisa langsung hubungi admin. Untuk buyer yang mau
                      COD, tinggal masuk ke toko Shopee DavFireId.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                      <AnimatedButton href={whatsappUrl} variant="green" external>
                        Hubungi Admin
                      </AnimatedButton>

                      <AnimatedButton href={shopeeUrl} variant="fire" external>
                        Buka Toko Shopee
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      <style>{`
        .panel-outer {
          position: relative;
          overflow: hidden;
          border-radius: 32px;
          padding: 1.5px;
          background: rgba(255, 255, 255, 0.03);
          box-shadow: 0 0 35px rgba(255, 110, 0, 0.07);
        }

        .panel-ring {
          position: absolute;
          inset: -175%;
          transform-origin: center;
          animation: spinRing 4s linear infinite;
          opacity: 0.95;
        }

        .panel-ring-fire {
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 305deg,
            rgba(238, 77, 45, 0.12) 320deg,
            rgba(255, 111, 44, 0.75) 336deg,
            rgba(238, 77, 45, 1) 348deg,
            rgba(255, 170, 60, 0.28) 357deg,
            transparent 360deg
          );
        }

        .panel-speed-slow {
          animation-duration: 5.4s;
        }

        .panel-speed-normal {
          animation-duration: 3.9s;
        }

        .panel-inner {
          position: relative;
          z-index: 2;
          height: 100%;
          border-radius: 30px;
          background: linear-gradient(
            180deg,
            rgba(15, 15, 18, 0.96),
            rgba(10, 10, 12, 0.98)
          );
          backdrop-filter: blur(12px);
        }

        .btn-wrap {
          position: relative;
          display: inline-block;
          overflow: hidden;
          border-radius: 18px;
          padding: 1.5px;
          background: rgba(255, 255, 255, 0.04);
          min-width: fit-content;
        }

        .btn-ring {
          position: absolute;
          inset: -240%;
          transform-origin: center;
          animation: spinRing 2.5s linear infinite;
          opacity: 0.95;
        }

        .btn-ring-fire {
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 312deg,
            rgba(238, 77, 45, 0.16) 326deg,
            rgba(255, 132, 52, 0.92) 340deg,
            rgba(238, 77, 45, 1) 352deg,
            rgba(255, 173, 70, 0.3) 358deg,
            transparent 360deg
          );
        }

        .btn-ring-green {
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 312deg,
            rgba(37, 211, 102, 0.14) 326deg,
            rgba(104, 247, 157, 0.95) 340deg,
            rgba(37, 211, 102, 1) 352deg,
            rgba(126, 255, 186, 0.25) 358deg,
            transparent 360deg
          );
        }

        .btn-ring-light {
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 312deg,
            rgba(255, 255, 255, 0.08) 326deg,
            rgba(255, 255, 255, 0.85) 340deg,
            rgba(220, 220, 220, 1) 352deg,
            rgba(255, 255, 255, 0.2) 358deg,
            transparent 360deg
          );
        }

        .btn-fill {
          position: relative;
          z-index: 2;
          display: inline-flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          padding: 14px 20px;
          font-size: 0.95rem;
          font-weight: 700;
          transition: transform 0.2s ease;
          white-space: nowrap;
        }

        .btn-wrap:hover .btn-fill {
          transform: scale(1.01);
        }

        .btn-fill-fire {
          background: linear-gradient(
            180deg,
            rgba(48, 24, 10, 0.96),
            rgba(35, 18, 8, 0.98)
          );
          color: rgb(255, 180, 103);
          box-shadow: inset 0 0 0 1px rgba(238, 77, 45, 0.2);
        }

        .btn-fill-green {
          background: linear-gradient(
            180deg,
            rgba(8, 34, 20, 0.96),
            rgba(6, 24, 14, 0.98)
          );
          color: rgb(134, 239, 172);
          box-shadow: inset 0 0 0 1px rgba(37, 211, 102, 0.2);
        }

        .btn-fill-light {
          background: linear-gradient(
            180deg,
            rgba(32, 32, 36, 0.96),
            rgba(20, 20, 24, 0.98)
          );
          color: rgb(255, 255, 255);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        @keyframes spinRing {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}