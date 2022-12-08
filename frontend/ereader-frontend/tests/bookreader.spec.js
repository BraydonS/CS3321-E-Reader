import { mount } from '@vue/test-utils'
import BookReader from '../src/views/BookReader.vue'
import { describe, it, expect} from "vitest";

describe('BookReader', () => {


  it('renders the chapter selector', () => {
    const wrapper = mount(BookReader, {
      propsData: {
        activeBook: './assets/Dune.epub'
      }
    })
    expect(wrapper.find('#toc').exists()).toBe(true)
  })

  it('renders the next and prev buttons', () => {
    const wrapper = mount(BookReader, {
      propsData: {
        activeBook: './assets/Dune.epub'
      }
    })
    expect(wrapper.find('.next-page').exists()).toBe(true)
    expect(wrapper.find('.prev-page').exists()).toBe(true)
  })

  it('renders the back button', () => {
    const wrapper = mount(BookReader, {
      propsData: {
        activeBook: './assets/Dune.epub'
      }
    })
    expect(wrapper.find('.back').exists()).toBe(true)
  })
  
})