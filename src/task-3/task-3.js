
export default function filterTable(tbody, filters) {
	//console.log(tbody.rows[0].classList, filters);
	let count = 1;

	for (const item of [...tbody.rows]) {
        item.classList.remove("d-none");
        item.classList.remove("table-row-even");
        
        for (const cell of item.cells) {
            const attr = cell.getAttribute("data-field-name");

            if (filters.album && attr === 'album' && !cell.innerHTML.includes(`${filters.album}`)) {
                item.classList.add("d-none");
            } else if (filters.performer && attr === 'performer' && !cell.innerHTML.includes(`${filters.performer}`)) {
                item.classList.add("d-none");
            } else if (filters.genre && attr === 'genre' && !cell.innerHTML.includes(`${filters.genre}`)) {
                item.classList.add("d-none");
            } else if (filters.year && attr === 'year' && !cell.innerHTML.includes(`${filters.year}`)) {
                item.classList.add("d-none");
            }

        }
        if (!item.classList.contains("d-none")) {
        	item.cells[0].innerHTML = count;
        	if (count % 2 === 0) item.classList.add("table-row-even");
        	count ++;
        }
	}
}



