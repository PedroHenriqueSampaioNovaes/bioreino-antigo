import debounce from './debounce.js';

export default class ScrollSuave {
  constructor(internalLink, header, listSection) {
    this.internalLinks = document.querySelectorAll(internalLink);
    this.header = document.querySelector(header);
    this.sections = document.querySelectorAll(listSection);
    this.activeClass = 'ativo';

    // Functions bind
    this.getCurrentEvent = this.getCurrentEvent.bind(this);
    this.changeLinkActiveToScroll = debounce(
      this.changeLinkActiveToScroll.bind(this),
      200,
    );
    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  getDistance() {
    this.elementDistance = [...this.sections].map((element) => {
      return {
        element,
        distMin: element.offsetTop - this.header.offsetHeight, // Distância do elemento em relação ao topo da página menos a altura do cabeçalho
        distMax:
          element.offsetTop +
          element.offsetHeight -
          this.header.clientHeight - 1,
      };
    });
  }

  getCurrentEvent(event) {
    event.preventDefault();
    if (event.type === 'scroll') {
      this.changeLinkActiveToScroll();
    } else if (event.type === 'click') {
      this.scrollToClick(event.currentTarget);
    }
  }

  scrollToClick(target) {
    const link = target;
    const href = link.getAttribute('href');

    if (link.hasAttribute('data-indice')) {
      this.elementDistance.forEach((dist) => {
        const elementToScroll = `#${dist.element.getAttribute('id')}`;
        if (elementToScroll === href) {
          this.smoothScrollTo(dist.distMin, 1000);
        }
      });

      this.alterClassLinksToClick(link);
    } else {
      const sectionTarget = document.querySelector(href);
      const distSection = sectionTarget.offsetTop - this.header.offsetHeight;
      console.log(this.header.offsetHeight)
      this.smoothScrollTo(distSection, 1000);
    }
  }

  changeLinkActiveToScroll() {
    this.elementDistance.forEach((dist, i) => {
      const scrollYPage = window.pageYOffset;
      if (scrollYPage >= dist.distMin - 1 && scrollYPage < dist.distMax) {
        this.internalLinks[i].classList.add(this.activeClass);
      } else {
        this.internalLinks[i].classList.remove(this.activeClass);
      }
    });
  }

  alterClassLinksToClick(link) {
    this.internalLinks.forEach((l) => l.classList.remove(this.activeClass));
    link.classList.add(this.activeClass);
  }

  onResize() {
    this.getDistance();
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
      link.addEventListener('click', this.getCurrentEvent),
    );
    window.addEventListener('scroll', this.getCurrentEvent);
    window.addEventListener('resize', this.onResize);
  }

  init() {
    if (this.internalLinks && this.header && this.sections.length) {
      this.getDistance();
      this.addScrollEvent();
    }
    return this;
  }
}
