const works = [
    {
        title: "Project 1",
        projects: [
            { title: "Dashboard", url: "works/Task2/dashboardd.html" },
            { title: "Index", url: "works/Task2/index.html" }
        ]
    },
    { title: "Project 2", url: "works/Task3/sample1.html" },
    { title: "Project 3", url: "works/Task4/js.html" },
    { title: "Project 4", url: "works/Task5/calc_jss.html" },,
    { title: "Project 5", url: "works/Task8/stringop.html" },
    { title: "Project 6", url: "works/Task9/conditions.html" },
    { title: "Project 7", url: "works/Task10/stack array.html" },
    { title: "Project 8", url: "works/Task11/task11.html" },
    
    {
        title: "Project 9",
        projects: [
            { title: "Sample 1", url: "works/Task12/samp1.html" },
            { title: "Sample 2", url: "works/Task12/samp2.html" }
        ]
    },
    {
        title: "Project 10",
        projects: [
            { title: "Tasks 13", url: "works/Task13/task13-1.html" },
            { title: "Task 13", url: "works/Task13/task13.html" }
        ]
    },
    {
        title: "Project 11",
        projects: [
            { title: "Task 14", url: "works/Task14/task14.html" },
            { title: "Tasks", url: "works/Task14/taskss.html" }
        ]
    },
    {
        title: "Project 12",
        projects: [
            { title: "Sorc15", url: "works/Task15/sorc15.html" },
            { title: "Task15", url: "works/Task15/task15.html" }
        ]
    }
];

function displayProjects() {
    const projectList = document.getElementById("project-list");
    const iframe = document.getElementById("content-frame");
    const contentTitle = document.getElementById("content-title");

    works.forEach(work => {
        let li = document.createElement("li");

        if (work.projects) {
            li.textContent = work.title;

            let subList = document.createElement("ul");

            work.projects.forEach(subProject => {
                let subLi = document.createElement("li");
                let link = document.createElement("a");
                link.textContent = subProject.title;
                link.href = "#"; 
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    iframe.src = subProject.url;
                    contentTitle.textContent = subProject.title;
                });
                subLi.appendChild(link);
                subList.appendChild(subLi);
            });

            li.appendChild(subList);
            projectList.appendChild(li);
        } else {
            let link = document.createElement("a");
            link.textContent = work.title;
            link.href = "#";
            link.addEventListener("click", (e) => {
                e.preventDefault();
                iframe.src = work.url;
                contentTitle.textContent = work.title;
            });
            li.appendChild(link);
            projectList.appendChild(li);
        }
    });
}

document.addEventListener("DOMContentLoaded", displayProjects);