
'use client';

import { useEffect, useRef } from 'react';
import { Draggable, InertiaPlugin, gsap } from 'gsap/all';
import Image from 'next/image';
import { IMAGES } from '@/utilities/Constants';
import Link from 'next/link';

interface CarouselConfig {
  radiusX?: number;
  radiusY?: number;
  activeAngle?: number;
  activeElement?: Element | null;
  onClick?: (element: Element, self: CarouselInstance) => void;
  onActivate?: (element: Element, self: CarouselInstance) => void;
  onDeactivate?: (element: Element, self: CarouselInstance) => void;
  onStart?: (element: Element, self: CarouselInstance) => void;
  onStop?: (element: Element, self: CarouselInstance) => void;
  draggable?: boolean;
  autoAdvance?: number | boolean;
}

interface CarouselInstance {
  rotation: (value?: number) => number;
  resize: (rx: number, ry: number) => void;
  render: () => void;
  activeElement: (value?: Element) => Element;
  elementRotation: (element: Element | Element[]) => number;
  to: (
    elOrRotation: Element | number | string,
    vars?: gsap.TweenVars,
    direction?: string
  ) => gsap.core.Tween;
  next: (vars?: gsap.TweenVars, direction?: string) => void;
  previous: (vars?: gsap.TweenVars, direction?: string) => void;
  kill: () => void;
  snap?: number;
  draggable?: Draggable;
  autoAdvance?: gsap.core.Tween | null;
}
export default function HistoryCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInstanceRef = useRef<CarouselInstance | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable, InertiaPlugin);

    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    const items = gsap.utils.toArray<Element>('.pxl-history-carousel .item-slide');
    if (!items.length) return;

    const carousel = buildCarousel(items, {
      radiusX: 1060,
      radiusY: 800,
      activeAngle: -90,
      draggable: true,

      onClick(element: Element, self: CarouselInstance) {
        self.to(element, { duration: 3, ease: 'linear' }, 'short');
      },

      onActivate(element, self) {
        const slides = gsap.utils.toArray(".pxl-history-carousel .item-slide");
        const thumbContainer = document.querySelector(".pxl-swiper-thumbs");
        const thumbWrapper = document.querySelector(".pxl-thumbs-wrapper");
        const thumbItems = gsap.utils.toArray<Element>(".thumb-item");

        if (!slides.length || !thumbItems.length) return;

        thumbItems.forEach((t) => t.classList.remove("active"));

        const activeIndex = slides.indexOf(element);

        const thumbIndex = Math.floor(activeIndex / 2) % thumbItems.length;

        const activeThumb = thumbItems[thumbIndex] as HTMLElement;
        activeThumb.classList.add("active");

        const offset =
            -(activeThumb.offsetLeft -
            (thumbContainer as HTMLElement).offsetWidth / 2 +
            activeThumb.offsetWidth / 2);

        gsap.to(thumbWrapper, {
            x: offset,
            duration: 0.6,
            ease: "power3.out",
        });
        }
    });

    carousel.render();
    carouselInstanceRef.current = carousel;

    function updateThumbWrapperPosition() {
      const thumbContainer = document.querySelector('.pxl-swiper-thumbs') as HTMLElement | null;
      const thumbWrapper = document.querySelector('.pxl-thumbs-wrapper');
      const activeItem = (document.querySelector('.thumb-item.active') || document.querySelector('.thumb-item')) as HTMLElement | null;

      if (!thumbContainer || !thumbWrapper || !activeItem) return;

      const offset = -(activeItem.offsetLeft - thumbContainer.offsetWidth / 2 + activeItem.offsetWidth / 2);

      gsap.to(thumbWrapper, {
        x: offset,
        duration: 0.8,
        ease: 'power2.out',
      });
    }

    const thumbContainer = document.querySelector('.pxl-swiper-thumbs');
    if (thumbContainer) {
      observerRef.current = new ResizeObserver(updateThumbWrapperPosition);
      observerRef.current.observe(thumbContainer);

      setTimeout(updateThumbWrapperPosition, 100);
    }

    let isScrolling = false;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const prevBtn = target.closest('.pxl-swiper-arrow-prev');
      const nextBtn = target.closest('.pxl-swiper-arrow-next');
      
      if ((prevBtn || nextBtn) && !isScrolling) {
        isScrolling = true;

        if (prevBtn) {
          carousel.previous();
        } else if (nextBtn) {
          carousel.next();
        }

        setTimeout(() => {
          isScrolling = false;
        }, 500);
      }
    };

    carouselElement.addEventListener('click', handleClick as EventListener);

    return () => {
      carouselElement.removeEventListener('click', handleClick as EventListener);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (carouselInstanceRef.current) {
        carouselInstanceRef.current.kill();
      }
    };
  }, []);

  return (
    <div ref={carouselRef} className="pxl-history-carousel layout-1 relative select-none sm:-mt-25">
        <div className="pxl-carousel-inner overflow-hidden">
            <div className="pxl-swiper-wrapper items-center">
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="content-item">
                            <h4 className="text-2xxl mb-3.75">The Beginning</h4>
                            <p className="sm:text-lg/6 text-sm item-des"> Our story began in a small co-working space with a big dream: to revolutionize the creative landscape. Armed with passion and fresh ideas, we launched our first campaign, earning our first major client within months. </p>
                            <div className="sm:pt-9.25 pt-5 pb-5">
                                  <Link href="/team-2" className="btn btn-primary btn-hover">
                                  <span>Join our team</span>
                              </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="item-image">
                                <Image loading="lazy" decoding="async" className="no-lazyload"
                                src={IMAGES.aboutimg8}
                                width="460" height="580" alt="img2-aboutus" title="img2-aboutus" />
                        </div>
                        <div className="content-item">
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="content-item">
                            <h4 className="text-2xxl mb-3.75">Our Origin</h4>
                            <p className="sm:text-lg/6 text-sm item-des">
                                Our story began in a small co-working space with a big dream: to revolutionize the
                                creative landscape. Armed with passion and fresh ideas, we launched our first
                                campaign,
                                earning our first major client within months. </p>
                            <div className="sm:pt-9.25 pt-5 pb-5">
                                  <Link href="/team-2" className="btn btn-primary btn-hover">
                                  <span>Join our team</span>
                              </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="item-image">
                            <Image loading="lazy" decoding="async" className="no-lazyload "
                                src={IMAGES.aboutimg9}
                                width="460" height="580" alt="img2-aboutus" title="img2-aboutus" />
                        </div>
                        <div className="content-item">
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="content-item">
                            <h4 className="text-2xxl mb-3.75">The Spark</h4>
                            <p className="sm:text-lg/6 text-sm item-des">
                                Our story began in a small co-working space with a big dream: to revolutionize the
                                creative landscape. Armed with passion and fresh ideas, we launched our first
                                campaign,
                                earning our first major client within months. </p>
                                <div className="sm:pt-9.25 pt-5 pb-5">
                                      <Link href="/team-2" className="btn btn-primary btn-hover">
                                  <span>Join our team</span>
                              </Link>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="item-image">
                            <Image loading="lazy"decoding="async" className="no-lazyload "
                                src={IMAGES.aboutimg10}
                                width="460" height="580" alt="img2-aboutus" title="img2-aboutus" />
                        </div>
                        <div className="content-item">
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="content-item">
                            <h4 className="text-2xxl mb-3.75">The Beginning</h4>
                            <p className="sm:text-lg/6 text-sm item-des">
                                Our story began in a small co-working space with a big dream: to revolutionize the
                                creative landscape. Armed with passion and fresh ideas, we launched our first
                                campaign,
                                earning our first major client within months. </p>
                            <div className="sm:pt-9.25 pt-5 pb-5">
                                  <Link href="/team-2" className="btn btn-primary btn-hover">
                                   <span>Join our team</span>
                               </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="item-image">
                            <Image loading="lazy" decoding="async" className="no-lazyload "
                                src={IMAGES.aboutimg11}
                                width="460" height="580" alt="img3-aboutus" title="img3-aboutus" />
                        </div>
                        <div className="content-item">
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="content-item">
                            <h4 className="text-2xxl mb-3.75">The Leap</h4>
                            <p className="sm:text-lg/6 text-sm item-des">
                                Our story began in a small co-working space with a big dream: to revolutionize the
                                creative landscape. Armed with passion and fresh ideas, we launched our first
                                campaign,
                                earning our first major client within months. </p>
                            <div className="sm:pt-9.25 pt-5 pb-5">
                                  <Link href="/team-2" className="btn btn-primary btn-hover">
                                  <span>Join our team</span>
                              </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="item-image">
                            <Image loading="lazy" decoding="async" className="no-lazyload "
                            src={IMAGES.aboutimg9}
                            width="460" height="580" alt="img3-aboutus" title="img3-aboutus" />
                        </div>
                        <div className="content-item">
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="content-item">
                            <h4 className="text-2xxl mb-3.75">Starting Point</h4>
                            <p className="sm:text-lg/6 text-sm item-des">
                                Our story began in a small co-working space with a big dream: to revolutionize the
                                creative landscape. Armed with passion and fresh ideas, we launched our first
                                campaign,
                                earning our first major client within months. </p>
                            <div className="sm:pt-9.25 pt-5 pb-5">
                                  <Link href="/team-2" className="btn btn-primary btn-hover">
                                  <span>Join our team</span>
                              </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pxl-swiper-slide item-slide">
                    <div className="item-inner relative">
                        <div className="item-image">
                            <Image loading="lazy" decoding="async" className="no-lazyload "
                                src={IMAGES.aboutimg10}
                                width="460" height="580" alt="img2-aboutus" title="img2-aboutus" />
                        </div>
                        <div className="content-item">
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-pev-next">
                <div className="text-pev-next">History</div>
                <div className="pxl-swiper-arrows custom-separate">
                    <div className="pxl-swiper-arrow pxl-swiper-arrow-prev absolute sm:-left-20.25 -left-12.5 -bottom-1.75 flex items-center justify-center size-12.5 cursor-pointer">
                        <span className="pxl-icon">
                             <svg width="57" height="24" viewBox="0 0 57 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M49 12H5" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                               <path d="M12 5L5 12L12 19" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        </span>
                    </div>
                    <div className="pxl-swiper-arrow pxl-swiper-arrow-next absolute sm:-right-20.25 -right-12.5 -bottom-1.75 flex items-center justify-center size-12.5 cursor-pointer">
                        <span className="pxl-icon">
                            <svg width="57" height="24" viewBox="0 0 57 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M8 12H52" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                               <path d="M45 5L52 12L45 19" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        </span>
                    </div>
                </div>
                <div className="pxl-swiper-slider-thumbs">
                    <div className="pxl-swiper-slider-inner">
                        <div className="pxl-swiper-thumbs overflow-hidden">
                            <div className="pxl-thumbs-wrapper swiper-wrapper">
                                <div className="pxl-swiper-slide thumb-item">
                                    <div className="item-inner relative">
                                        <span className="item-year">2020</span>
                                    </div>
                                </div>
                                <div className="pxl-swiper-slide thumb-item">
                                    <div className="item-inner relative">
                                        <span className="item-year">2021</span>
                                    </div>
                                </div>
                                <div className="pxl-swiper-slide thumb-item">
                                    <div className="item-inner relative">
                                        <span className="item-year">2022</span>
                                    </div>
                                </div>
                                <div className="pxl-swiper-slide thumb-item">
                                    <div className="item-inner relative">
                                        <span className="item-year">2023</span>
                                    </div>
                                </div>
                                <div className="pxl-swiper-slide thumb-item">
                                    <div className="item-inner relative">
                                        <span className="item-year">2024</span>
                                    </div>
                                </div>
                                <div className="pxl-swiper-slide thumb-item">
                                    <div className="item-inner relative">
                                        <span className="item-year">2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

function buildCarousel(
  targets: Element[],
  {
    radiusX = 200,
    radiusY = 200,
    activeAngle = -90,
    activeElement,
    onClick,
    onActivate,
    onDeactivate,
    onStart,
    onStop,
    draggable,
    autoAdvance,
  }: CarouselConfig
): CarouselInstance {
  const targetElements = gsap.utils.toArray<Element>(targets);
  gsap.set(targetElements, { xPercent: -50, x: 0, yPercent: -50, y: 0 });

  const DEG2RAD = Math.PI / 180;
  const eventTypes = (
    'ontouchstart' in document.documentElement
      ? 'touchstart,touchmove,touchcancel,touchend'
      : !('onpointerdown' in document.documentElement)
      ? 'mousedown,mousemove,mouseup,mouseup'
      : 'pointerdown,pointermove,pointercancel,pointerup'
  ).split(',');
  
  const round = (value: number) => Math.round(value * 10000) / 10000;
  const tempDiv = document.createElement('div');
  const quantity = targetElements.length;
  const angleInc = 360 / quantity;
  const wrap = gsap.utils.wrap(0, quantity);
  const angleWrap = gsap.utils.wrap(0, 360);
  
  let rotation = 0;
  let dragged = false;
  let onPressRotation = 0;
  let currentActiveElement: Element = targetElements[0];
  
  const autoAdvanceCall = autoAdvance
    ? gsap.delayedCall(parseFloat(autoAdvance.toString()) || 2, () => {
        self.next();
        if (autoAdvanceCall && typeof autoAdvanceCall === 'object') {
          autoAdvanceCall.restart(true);
        }
      })
    : null;

  const xSetters = targetElements.map((el) => gsap.quickSetter(el, 'x', 'px'));
  const ySetters = targetElements.map((el) => gsap.quickSetter(el, 'y', 'px'));

  const self: CarouselInstance = {
    rotation(value?: number): number {
      if (arguments.length && value !== undefined) {
        const prevActive = currentActiveElement;
        rotation = angleWrap(value);
        currentActiveElement = targetElements[wrap(Math.round(-value / angleInc))];
        self.render();
        if (prevActive !== currentActiveElement) {
          onDeactivate && prevActive && onDeactivate(prevActive, self);
          onActivate && onActivate(currentActiveElement, self);
        }
      }
      return rotation;
    },
    
    resize(rx: number, ry: number) {
      radiusX = rx;
      radiusY = ry;
      self.render();
    },
    
    render() {
      self.render = function () {
        const inc = angleInc * DEG2RAD;
        let a = (rotation + activeAngle) * DEG2RAD;
        const activeIndex = targetElements.indexOf(currentActiveElement);

        targetElements.forEach((el) => el.classList.remove('active'));

        for (let i = 0; i < quantity; i++) {
          xSetters[i](round(Math.cos(a) * radiusX));
          ySetters[i](round(Math.sin(a) * radiusY));

          if (i === activeIndex) {
            gsap.to(targetElements[i], {
              opacity: 1,
              rotate: 0,
              duration: 0.4,
              ease: 'power1.out',
            });
            targetElements[i].classList.add('active');
          } else if (i === wrap(activeIndex - 1) || i === wrap(activeIndex + 1)) {
            gsap.to(targetElements[i], {
              opacity: 1,
              rotate: i === wrap(activeIndex - 1) ? -10 : 10,
              duration: 0.4,
              ease: 'power1.out',
            });
          } else if (i === wrap(activeIndex - 2) || i === wrap(activeIndex + 2)) {
            gsap.to(targetElements[i], {
              opacity: 0,
              rotate: i === wrap(activeIndex - 2) ? -20 : 20,
              duration: 0.4,
              ease: 'power1.out',
            });
          } else if (i === wrap(activeIndex - 3) || i === wrap(activeIndex + 3)) {
            gsap.to(targetElements[i], {
              opacity: 0,
              rotate: i === wrap(activeIndex - 3) ? -40 : 40,
              duration: 0.4,
              ease: 'power1.out',
            });
          } else {
            gsap.to(targetElements[i], {
              opacity: 0,
              rotate: 0,
              duration: 0.4,
              ease: 'power1.out',
            });
          }

          a += inc;
        }
      };
    },

    activeElement(value?: Element): Element {
      if (arguments.length && value) {
        self.rotation(self.elementRotation(value));
      }
      return currentActiveElement;
    },
    
    elementRotation(element: Element | Element[]): number {
      const index = targetElements.indexOf(gsap.utils.toArray<Element>(element)[0]);
      return (quantity - index) * angleInc;
    },
    
    to(
  elOrRotation: Element | number | string,
  vars: gsap.TweenVars = {},
  direction?: string
): gsap.core.Tween {
  const rotationValue =
    typeof elOrRotation === 'number'
      ? elOrRotation
      : typeof elOrRotation === 'string'
      ? parseFloat(elOrRotation)
      : self.elementRotation(elOrRotation);

  const tweenVars: gsap.TweenVars = {
    ...vars,
    rotation: rotationValue,
    overwrite: true,
  };

  const { onUpdate, onComplete } = tweenVars;
  const _onStart = tweenVars.onStart;

  autoAdvanceCall?.pause();

  tweenVars.onStart = function () {
    onStart?.(currentActiveElement, self);
    _onStart?.call(this);
  };

  tweenVars.onComplete = function () {
    onStop?.(currentActiveElement, self);
    onComplete?.call(this);
    autoAdvanceCall?.restart(true);
  };

  if (direction) {
    const getter = gsap.getProperty(tempDiv);

    tweenVars.onUpdate = function () {
      self.rotation(getter('rotation') as number);
      onUpdate?.call(this);
    };

    tweenVars.rotation = `${rotationValue}_${direction}`;

    return gsap.fromTo(tempDiv, { rotation }, tweenVars);
  }

  return gsap.to(self, tweenVars);
},
    
    next(vars: gsap.TweenVars = {}, direction?: string) {
      const mergedVars = {
        ...vars,
        duration: 1,
      };
      const element = targetElements[wrap(targetElements.indexOf(currentActiveElement) + 2)];
      self.to(element, mergedVars, direction || 'ccw');
    },
    
    previous(vars: gsap.TweenVars = {}, direction?: string) {
      const mergedVars = {
        ...vars,
        duration: 1,
      };
      const element = targetElements[wrap(targetElements.indexOf(currentActiveElement) - 2)];
      self.to(element, mergedVars, direction || 'cw');
    },
    
    kill() {
      targetElements.forEach((el) => {
        el.removeEventListener('click', _onClick as EventListener);
        el.removeEventListener(eventTypes[0], onPress as EventListener);
        el.removeEventListener(eventTypes[2], onRelease as EventListener);
        el.removeEventListener(eventTypes[3], onRelease as EventListener);
      });
      gsap.killTweensOf(self);
      tempDiv.parentNode && tempDiv.parentNode.removeChild(tempDiv);
      autoAdvanceCall && autoAdvanceCall.kill();
      draggableInstance && draggableInstance.kill();
    },
    
    autoAdvance: autoAdvanceCall || null,
  };

  const _onClick = (e: Event) => {
    if (!dragged) {
      if (autoAdvanceCall && typeof autoAdvanceCall === 'object') {
        autoAdvanceCall.restart(true);
      }
      onClick && onClick(e.currentTarget as Element, self);
    }
  };

  const onPress = (e: Event) => {
    onPressRotation = rotation;
    gsap.set(tempDiv, { rotation: rotation });
    autoAdvanceCall && autoAdvanceCall.pause();
    gsap.killTweensOf(self);
    draggableInstance && draggableInstance.startDrag(e);
    dragged = false;
  };

  const onRelease = (e: Event) => {
    if (draggableInstance) {
      draggableInstance.endDrag(e);
    }
    if (rotation === onPressRotation) {
      autoAdvanceCall && autoAdvanceCall.restart(true);
      if (draggableInstance && draggableInstance.tween) {
        draggableInstance.tween.kill();
      }
      _onClick(e);
    }
  };

  const syncDraggable = () => {
    if (!dragged) {
      onStart && onStart(currentActiveElement, self);
      dragged = true;
    }
    if (draggableInstance) {
      self.rotation(draggableInstance.rotation);
    }
  };

  targetElements[0].parentNode?.appendChild(tempDiv);
  gsap.set(tempDiv, {
    visibility: 'hidden',
    position: 'absolute',
    width: 0,
    height: 0,
    top: '50%',
    left: '50%',
    xPercent: -50,
    yPercent: -50,
  });

  targetElements.forEach((el) => {
    if (draggable) {
      el.addEventListener(eventTypes[0], onPress as EventListener);
      el.addEventListener(eventTypes[2], onRelease as EventListener);
      el.addEventListener(eventTypes[3], onRelease as EventListener);
    } else {
      el.addEventListener('click', _onClick as EventListener);
    }
  });

  self.snap = angleInc;
  
  let draggableInstance: Draggable | null = null;
  
  if (draggable) {
    draggableInstance = Draggable.create(tempDiv, {
      type: 'rotation',
      snap: gsap.utils.snap(2 * angleInc),
      inertia: true,
      onThrowComplete: () => {
        autoAdvanceCall && autoAdvanceCall.restart(true);
        onStop && onStop(currentActiveElement, self);
      },
      onThrowUpdate: syncDraggable,
      onDrag: syncDraggable,
    })[0];
    
    self.draggable = draggableInstance;
  }

  self.activeElement(gsap.utils.toArray<Element>(activeElement || null)[0] || targetElements[0]);
  return self;
}