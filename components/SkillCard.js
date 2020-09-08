import React from 'react';

const SkillCard = ({ title, icon, description, backgroundColor }) => (
<div className="expertise-card" style={{ height: 300 }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="svg-container" style={{ padding: '1.5em', backgroundColor: backgroundColor, borderRadius: '1.5em' }}  >
            {icon}
        </div>
        <h1 className="dynamic-text" style={{ display: 'inline-block', marginLeft: '0.5em' }} >{title}</h1>
    </div>
    {description}
</div>
);

export default SkillCard