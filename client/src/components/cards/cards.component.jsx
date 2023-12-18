import React from 'react'
import Card from '../card/card.component'


export default function Cards(driver) {
    return (
        <div>
            {driver.map(
                //<div> {driver.name} </div>
                (driver, i) => <Card driver={driver} key={i} />
            )}
        </div>
    )
}
