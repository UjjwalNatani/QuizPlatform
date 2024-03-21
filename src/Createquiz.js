export default function opentab (tabname){
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");


    return(
        <div>
            


            for(tablink of tablinks) {
                tablink.classList.remove("active-link")
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        </div>
    )
}