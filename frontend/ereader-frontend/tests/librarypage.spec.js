import { mount } from '@vue/test-utils';
import LibraryPage from '../src/views/LibraryPage.vue';
import { describe, it, expect, beforeEach } from "vitest";

describe('LibraryPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(LibraryPage);
  });

  it('renders the e-reader home page', () => {
    expect(wrapper.find('.header').exists()).toBe(true);
    expect(wrapper.find('.navbar').exists()).toBe(true);
    expect(wrapper.find('.avatar').exists()).toBe(true);
    expect(wrapper.find('.search-container').exists()).toBe(true);
    expect(wrapper.find('.book-list').exists()).toBe(true);
    expect(wrapper.find('.book-item').exists()).toBe(true);
    expect(wrapper.find('#title').exists()).toBe(true);
    expect(wrapper.find('#author').exists()).toBe(true);
  });

  it('renders the correct number of books', () => {
    const length = wrapper.vm.books.length
    expect(wrapper.findAll('.book-item').length).toBe(length);
  });

});