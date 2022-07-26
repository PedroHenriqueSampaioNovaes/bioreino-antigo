export default class ScrollSuave {
  constructor(internalLink, header, listSection) {
    this.internalLinks = document.querySelectorAll(internalLink);
    this.header = document.querySelector(header);
    this.sections = document.querySelectorAll(listSection);
    this.activeClass = 'ativo';

    // Functions bind
    this.getScrollTopByHref = this.getScrollTopByHref.bind(this);
    this.changeLinkActiveToScroll = this.changeLinkActiveToScroll.bind(this);
  }

  getDistance() {
    this.elementDistance = [...this.sections].map((element) => {
      return {
        element, 
        top: element.offsetTop,
        bottom: element.offsetTop + element.offsetHeight
      };
    });
  }

  getScrollTopByHref(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const href = link.getAttribute('href');
    const sectionDistance = document.querySelector(href).offsetTop;

    const topElement = sectionDistance - this.header.offsetHeight;
    this.smoothScrollTo(topElement, 1000);

    this.alterClassLinksToClick(link);
  }

  changeLinkActiveToScroll() {
    this.elementDistance.forEach((d, i) => {
      const scrollYPage = window.pageYOffset;
      if (scrollYPage > d.top && scrollYPage < d.bottom) {
        this.internalLinks[i].classList.add(this.activeClass);
      } else {
        this.internalLinks[i].classList.remove(this.activeClass);
      }
    })
  }

  alterClassLinksToClick(link) {
    this.internalLinks.forEach((l) => l.classList.remove(this.activeClass));
    link.classList.add(this.activeClass);
  }

  /**
   * Smooth scroll animation
   * @param {int} endY: destination y coordinate
   * @param {int} duration: animation duration in ms
   */
  smoothScrollTo(endY, duration) {
    const startY = window.scrollY || window.pageYOffset;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(0, newY);
    }, 1000 / 60); // 60 fps
  }

  addScrollEvent() {
    this.internalLinks.forEach((link) =>
      link.addEventListener('click', this.getScrollTopByHref),
    );
    window.addEventListener('scroll', this.changeLinkActiveToScroll);
  }

  init() {
    if (this.internalLinks && this.header && this.sections.length) {
      this.getDistance();
      this.addScrollEvent();
    }
    return this;
  }
}
