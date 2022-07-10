const SwitchingColorDirective = {
  mounted (el, binding) {
    const modifiers = binding.modifiers

    if (modifiers.underline) {
      el.style.textDecoration = 'underline'
    }

    if (modifiers.textcenter) {
      el.style.textAlign = 'center'
    }

    const speeds = {
      slow: 2000,
      normal: 100,
      fast: 500,
      crazy: 100
    }
    const speedName = binding.arg || 'normal'
    const speed = speeds[speedName]
    const colors = binding.value
    let i = 0

    el.__SwitchingColorInterval__ = setInterval(() => {
      console.log('🎨 coloring');
      el.style.color = colors[i++]

      if(i > colors.length) i = 0
    }, speed);
  },

  unmounted (el) {
    clearInterval(el.__SwitchingColorInterval__)
  }
}

export default app => {
  app.directive('switching-color', SwitchingColorDirective)
}