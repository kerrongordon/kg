import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';


@Injectable()
export class KgSeoService {

  private titleService: Title;
  private headElement: HTMLElement;
  private metaDescription: HTMLElement;

  private ogTitle: HTMLElement;
  private ogType: HTMLElement;
  private ogUrl: HTMLElement;
  private ogImage: HTMLElement;
  private ogDescription: HTMLElement;

  private twitterCard: HTMLElement;
  private twitterCreator: HTMLElement;
  private twitterTitle: HTMLElement;
  private twitterDescription: HTMLElement;
  private twitterImage: HTMLElement;

  private robots: HTMLElement;
  private DOM: any;

  constructor(titleService: Title) {

    this.titleService = titleService;
    this.DOM = getDOM();

    this.headElement = this.DOM.query('head');
    this.metaDescription = this.getOrCreateMetaElement('description', 'name');
    this.robots = this.getOrCreateMetaElement('robots', 'name');

    this.ogTitle = this.getOrCreateMetaElement('og:title', 'property');
    this.ogType = this.getOrCreateMetaElement('og:type', 'property');
    this.ogUrl = this.getOrCreateMetaElement('og:url', 'property');
    this.ogImage = this.getOrCreateMetaElement('og:image', 'property');
    this.ogDescription = this.getOrCreateMetaElement('og:description', 'property');

    this.twitterCard = this.getOrCreateMetaElement('twitter:card', 'name');
    this.twitterCreator = this.getOrCreateMetaElement('twitter:creator', 'name');
    this.twitterTitle = this.getOrCreateMetaElement('twitter:title', 'name');
    this.twitterDescription = this.getOrCreateMetaElement('twitter:description', 'name');
    this.twitterImage = this.getOrCreateMetaElement('twitter:image', 'name');
  }

  public getTitle(): string {
    return this.titleService.getTitle();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
    this.ogTitle.setAttribute('content', newTitle);
    this.twitterTitle.setAttribute('content', newTitle);
  }

  public setOgType() {
    this.ogType.setAttribute('content', 'article');
  }

  public setTwitterCard() {
    this.twitterCard.setAttribute('content', 'summary_large_image');
  }

  public setTwitterCreator() {
    this.twitterCreator.setAttribute('content', '@kerrongordon');
  }

  public getMetaDescription(): string {
    return this.metaDescription.getAttribute('content');
  }

  public setMetaImage(image: string) {
    this.ogImage.setAttribute('content', image);
    this.twitterImage.setAttribute('content', image);
  }

  public setMetaUrl(url: string) {
    this.ogUrl.setAttribute('content', url);
  }

  public setMetaDescription(description: string) {
    this.metaDescription.setAttribute('content', description);
    this.ogDescription.setAttribute('content', description);
    this.twitterDescription.setAttribute('content', description);
  }

  public getMetaRobots(): string {
    return this.robots.getAttribute('content');
  }

  public setMetaRobots(robots: string) {
    this.robots.setAttribute('content', robots);
  }

    private getOrCreateMetaElement(name: string, attr: string): HTMLElement {
      let el: HTMLElement;
      el = this.DOM.query('meta[' + attr + '="' + name + '"]');
      if (el === null) {
        el = this.DOM.createElement('meta');
        el.setAttribute(attr, name);
        this.headElement.appendChild(el);
      }
      return el;
    }

}
