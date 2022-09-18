export default function weAreHiring() {
  const fn = () => {
    console.log('%c🚀 We are Coding!!! 🚀%c\n%cJoin us: https://meta.atomecho.cn/', 'color:#1348ba;font-size:3rem;padding:20px;', 'display:none', 'font-size:1.5rem;padding:20px')
  }
  fn()
  setInterval(fn, 300000)
}
