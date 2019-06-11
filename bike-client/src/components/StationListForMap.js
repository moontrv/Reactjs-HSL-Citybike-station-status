import React from 'react';

const scrollToItemByIndex = (index) => {
    // Find the list item element (by index), and scroll wrapper element
    const scrollItem = document.querySelector(`[scrollindex="${(index)}"]`)
    const scrollWrapper = document.querySelector(`[scrollwrapper="scrollwrapper"]`)

    if (scrollItem && scrollWrapper) {
        // If list item found in DOM, get the top offset
        const itemRect = scrollItem.offsetTop // [UPDATED]
        const wrapperRect = scrollWrapper.offsetTop // [UPDATED]
        // Scroll the wrapper to the offset of the list item we're scrolling to
        scrollWrapper.scrollTo(0, itemRect-wrapperRect)
    }
}

const StationListForMap = (props) => {

    return (
        <ul className="list-group m-group" scrollwrapper="scrollwrapper">
            {props.providerState.stations.map((item, idx) => {
                let active_class = "list-group-item";
                let text_class = "";
                if (props.providerState.currentStation[0] === item.name) {
                    active_class = "list-group-item active";
                    scrollToItemByIndex(idx);
                }
                if (item.bikesAvailable > 3) {
                    text_class = "m-fz08 green-text";
                } else if (item.bikesAvailable <= 3 && item.bikesAvailable > 0) {
                    text_class = "m-fz08 orange-text";
                } else {
                    text_class = "m-fz08 red-text";
                }
                return (
                    <li className={active_class} key={item.stationId} onClick={() => props.actions.getAStation(item.stationId, "from_side_list")} scrollindex={idx}>
                        <span role="button" className={text_class}>{item.name} ({item.bikesAvailable} / {item.bikesAvailable + item.spacesAvailable})</span>
                        {/* <span className="oi oi-clipboard float-right"></span> */}
                    </li>
                );
            })}
        </ul>
    );
}


export default StationListForMap;

