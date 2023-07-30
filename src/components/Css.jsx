import '../style/external.css'
import '../style/abc.scss'
import ButtonModule from '../style/button.module.css'
const InlineCss = () => {
    return (
        <h1 style={{ backgroundColor: "yellow" }}>Inline style</h1>
    )
}
const Stylesheet = () => {
    let abc = { backgroundColor: "red" }
    return (
        <h1 style={abc}>stylesheet or inline style</h1>
    )
}
const External = () => {
    return (
        <h1 className="main">External style</h1>
    )
}
const ModuleCSS = () => {
    return (
        <h1 className={ButtonModule.btn}>Module style</h1>
    )
}
const SassCSS = () => {
    return (
        <div className="sub">
            <h1 className='sub_h1'>Saas style</h1>
            <h1 className='subAbc'>Saas style</h1>
        </div>
    )
}
export { InlineCss, Stylesheet, External, ModuleCSS, SassCSS }