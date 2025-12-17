---
layout: default
title: "Projects | Hershey Marbeda"
permalink: /projects/
---
<body>
<!-- Projects Content -->
    <div class="projects-content">
        <h2><span class="highlight">MY</span> PROJECTS</h2>
        <div class="projects-grid">
            <div class="card">
                <img src="{{ 'images/casaiya_logo.jpg' | relative_url }}" class="card-img-top" alt="Casaiya Luxury Resort logo.">
                <div class="card-body">
                    <h5 class="card-title">Casaiya Luxury Resort</h5>
                    <p class="card-text card-text--clamped">
                    A showcase site for a local rental business in Rizal, Philippines, focused on better visibility and customer reach; however, the website's domain is still underway. <br><br><strong>Programming Languages used:</strong> HTML, CSS, and JavaScript
                    </p> 
                    <button class="btn-toggle" type="button" aria-expanded="false" data-mode="drawer">Read more</button>
                    <div class="card-actions">
                        <a href="https://hersheymarbeda.github.io/casaiya_final_showcase/" class="btn" target="_blank" rel="noopener noreferrer">View Website</a>
                    </div>
                </div>
            </div>
            <div class="card">
                <img src="{{ 'images/ivy-logo.png' | relative_url }}" class="card-img-top" alt="Portfolio Website thumbnail.">
                <div class="card-body">
                    <h5 class="card-title">SoIT Chatbot</h5>
                    <p class="card-text card-text--clamped">
                        <strong>Capstone Project: </strong> 
                        Developed a chatbot for the School of Information Technology (SoIT) at <a href="https://www.ivytech.edu/" target="_blank" rel="noopener noreferrer">Ivy Tech Community College</a>.
                        This project was forked from a previous team’s repository and further enhanced by our team (FA24 Blue Team).<br>
                        <br><strong>Goal:</strong> This project aims to assist students and faculty by providing quick answers to common questions about courses, schedules, and campus resources. 
                        <br><br>I collaborated with two other team members, focusing primarily on <strong>backend development using Node.js.</strong> 
                        My key contributions included implementing manually coded <strong>Filipino translations</strong>, improving <strong>response accuracy</strong>, and enhancing the <strong>user interface</strong> for a better user experience.
                        I also updated the project’s visual design by introducing a new logo and integrating <strong><a href="https://icons.getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap icons</a></strong> for a more modern aesthetic.
                    </p>
                    <button class="btn-toggle" type="button" aria-expanded="false" data-mode="drawer">Read more</button>
                    <div class="card-actions">
                        <a href="https://github.com/rohydro93/SoIT_ChatBot_BrownTeam" class="btn" target="_blank" rel="noopener noreferrer">View GitHub Repository</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- Project Drawer (half-screen) -->
    <div class="drawer-backdrop" id="drawer-backdrop" aria-hidden="true"></div>
    <aside class="project-drawer" id="project-drawer" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="project-drawer-title">
        <div class="project-drawer__header">
            <h3 class="project-drawer__title" id="project-drawer-title">Project</h3>
            <button class="project-drawer__close" id="drawer-close" aria-label="Close">×</button>
        </div>
        <div class="project-drawer__body">
            <img class="project-drawer__image" id="drawer-image" alt="Project image" />
            <div class="project-drawer__text" id="drawer-text"></div>
        </div>
    </aside>
 <!-- Include helper script -->
    <script src="js/projects.js" defer></script>
</body>