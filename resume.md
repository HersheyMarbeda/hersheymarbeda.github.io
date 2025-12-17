---
layout: default
title: "Resume | Hershey Marbeda"
permalink: /resume/
---

<body class="resume-theme">
<!-- Resume Content -->
    <div class="resume-content">
        <h2><span class="highlight">MY</span> DETAILED RESUME</h2>
        <div class="resume-container">
            <dl class="resume-list">
                <br><br>
                <dt>Education</dt>
                <dd>
                    <div class="degree">Associate of Applied Science (A.A.S.) in Cybersecurity / Information Assurance</div>
                    <div class="school">Ivy Tech Community College — Indianapolis, IN | January 2026 to <span class="dates">present</span></div> 
                    <br>
                    <div class="degree">Associate of Science (A.S.) in Computer Science</div>
                    <div class="school">Ivy Tech Community College — Indianapolis, IN | <span class="dates">December 2025</span></div> 
                </dd>
                <dt>Technical Certifications</dt>
                <dd>
                    <br>
                    <div class="degree">Freshman Engineering | Cum Laude | <a href="https://www.parchment.com/u/award/ddb881f3031260659d3ff164562670da" target="_blank" rel="noopener noreferrer">View Certificate</a></div>
                    <div class="school">Ivy Tech Community College — Indianapolis, IN | May 2025</div>
                    <br>
                    <div class="degree">Indiana College Core | Cum Laude | <a href="https://www.parchment.com/u/award/07a7d94d506706a87a4a4fe0cb17c88c" target="_blank" rel="noopener noreferrer">View Certificate</a></div>
                    <div class="school">Ivy Tech Community College — Terre Haute, IN </div>
                </dd>
                <dd>
                    <button type="button" id="open-courses" class="btn btn-outline-primary">Full List of Courses I've Taken</button>
                </dd>
                <hr> <!-- Separator line -->
                <dt>Honors & Memberships</dt>
                <dd>
                    <div class="degree">Phi Theta Kappa Honor Society</div>
                    <div class="school">Ivy Tech Community College — Indianapolis, IN | <span class="dates">Inducted June 2025</span></div>
                    <br>
                    <div class="degree">Fall 2024 Dean's List</div>
                    <ul>
                        <li>Recognized for academic excellence by achieving a GPA higher than 3.5 during the Fall 2024 semester.</li>
                    </ul>
                    <div class="school">Ivy Tech Community College — Indianapolis, IN </div>
                    <br>
                    <div class="degree">Spring 2024 Dean's List</div>
                    <div class="school">Ivy Tech Community College — Indianapolis, IN </div>
                    <br>
                    <div class="degree">Fall 2023 Dean's List</div>
                    <div class="school">Ivy Tech Community College — Terre Haute, IN </div>
                    <br>
                </dd>
                <hr> <!-- Separator line -->
                <dt>Industry Certifications</dt>
                <dd>
                    <div class="degree">Soft Skills Courseware</div>
                    <div class="school">WIN Learning | December 2025</div>
                    <br>
                </dd>
                <hr> <!-- Separator line -->
                <dt>Technical Skills</dt>
                <dd>
                    <ul>
                        <li>HTML, CSS, JavaScript, Node.js, Python, C++, Bootstrap, GitHub</li>
                        <li>SQL, SQLite, MongoDB</li>
                        <li>Visual Studio Code, Git, GitHub, Command Line</li>
                        <li>VS Code, Xcode</li>
                        <li>Windows, MacOS</li>
                        <li>Microsoft Office, Jira, Discord</li>
                    </ul>
                </dd>
                <br>
                <dt>Soft Skills</dt>
                <dd>
                    <ul>
                        <li>Multicultural communication and insights</li>
                        <li>Problem-solving and critical thinking</li>
                        <li>Adaptability and time management</li>
                        <li>Collaboration and teamwork</li>
                    </ul>
                </dd>
                <hr> <!-- Separator line -->
                <dt>Languages</dt>
                <dd>
                    <ul>
                        <li>English (Native)</li>
                        <li>Filipino / Tagalog (Native)</li>
                    </ul>
                </dd>
                <hr> <!-- Separator line -->
            </dl>
            <!-- Hidden content for the Courses drawer -->
            <div id="courses-content" style="display:none;">
                <h4>A.S. in Computer Science Coursework</h4>
                <ul>
                    <li>CSCI 101: Computer Science I</li>
                    <li>Network Fundamentals</li>
                    <li>Operating Systems</li>
                    <li>Linux Administration</li>
                </ul>
                <p> MORE TO COME</p>
                <h4>A.A.S. in Cybersecurity / Information Assurance Coursework</h4>
                <p> MORE TO COME</p>
            </div>
            <!-- <button type="button" id="download-resume" class="btn btn-outline-primary" data-url="{{ '/Resume-Hershey Marbeda.pdf' | relative_url }}">View My Resume</button> -->
            <!-- In case my resume is still on processing again -->
            <button type="button" class="download-resume" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Not Yet Available">View My Resume</button>
        </div>
    </div>
    <!-- Shared half-screen drawer markup (reused from Projects) -->
    <div id="drawer-backdrop" class="drawer-backdrop" aria-hidden="true"></div>
    <aside id="project-drawer" class="project-drawer" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="project-drawer-title">
        <div class="project-drawer__header">
            <h3 id="project-drawer-title" class="project-drawer__title">Details</h3>
            <button id="drawer-close" class="project-drawer__close" aria-label="Close">×</button>
        </div>
        <div class="project-drawer__body">
            <img id="drawer-image" class="project-drawer__image" alt="" style="display:none;" />
            <div id="drawer-text" class="project-drawer__text"></div>
        </div>
    </aside>
    <!-- Bootstrap JS bundle (includes Popper for popovers) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous" defer></script>
    <script src="js/resume.js" defer></script>
</body>
