import React, {useRef} from 'react';

const AccordionItem = (props) => {
        const contentEl = useRef();
        const { handleToggle, active, faq } = props;
        const { header, icon, id, text, image_src } = faq;
    
        return (
            <>
                <div className='accordionItem'>
                    <div className="accordion_wrap">
                        <div className={`accordion_header ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                            <h3 className="accordion_ttl">{(icon ? <span className="ic"><img src={icon} /></span> : '')} {header}</h3>
                            <span className='toggle_ic'></span>
                        </div>
                        <div ref={contentEl} className={`accordion_body ${active === id ? 'show' : ''}`} style={
                            active === id
                                ? { height: contentEl.current.scrollHeight }
                                : { height: "0px" }
                        }>
                            {(image_src ? <img src={image_src} />: '')}
                            {(text ? <p>{text}</p> : '')}
                        </div>
                    </div>
                </div>
            </>            
        )
}
export default AccordionItem;