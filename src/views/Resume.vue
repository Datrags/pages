<template >

<!--Name-->
<div class="text-2xl space-y-7 bg-slate-200 m-10 pb-5">
    <h1 class="text-7xl text-center">Stephan Green</h1>
    <!--Education-->
    
    <h1 class="font-bold text-4xl">Education</h1>
    <Education v-for="(ed, index) in edu" :key="index" :school="ed.school" 
        :dates="ed.dates" :classes="ed.classes"/>
        
    <!--Work Experience-->
    <h1 class="font-bold text-4xl">Work Experience</h1>
    <Work v-for="(exp, index) in experience" :key="index" :work="exp.work" 
        :role="exp.role" :dates="exp.dates" :tasks="exp.tasks"/>
    <!--Skills--> 
    <h1 class="font-bold text-4xl">Skills</h1>
    <div class="info">
        <h3 class="text-3xl font-semibold">Programming Languages:</h3>
        <p> Python, C/C++, C#, Rust, Java, JavaScript, CSS, HTML, VueJS</p>
        <h3 class="text-3xl font-semibold">Software and Tools: </h3>
        <p>Word, Excel, Powerpoint, Unix Terminal</p>
        <h3 class="text-3xl font-semibold">Video Game Engines: </h3>
        <p>Godot, Unity</p>
    </div>
    <!--Activities-->
    <h1 class="font-bold text-4xl">Activities</h1>
    <div class="info">
        <h3>Itch.io Game Jam Participant</h3>
    </div>
    <h1 class="font-bold text-4xl">Social</h1>
    <div class="h-10 w-10">
        <a href="https://www.linkedin.com/in/stephan-green-b52692104/" >
            <img src="../assets/linkedin-svgrepo-com.svg" />
        </a>
    </div>
    
</div>
</template>
<script setup>
    import Work from '../components/Work.vue'
    import Education from '../components/Education.vue'
    const edu = [
        {
            school: 'Tufts University | BA History',
            dates: '2016 - 2021',
            classes: 'Intro to Computer Science, Data Structures,\
                Machine Learning, Web Programming & Engineering. History of\
                Europe since 1815, Byzantine Empire, Byzantine Women, Western Art\
                Ancient Rome, Japan until 1868, North America'
                
        },
        {
            school: 'New York University | MA Teaching',
            dates: '2022 - present',
            classes: 'Teacher Residency Modules' 
        }
    ]
    const experience = [
        {
            work: 'Bronx Prep Charter High',
            role: 'Teacher Resident',
            dates: 'Aug 22 - present',
            tasks: []
        },
        {
            work: 'iD Tech',
            role: 'Online Instructor',
            dates: 'Nov 21 - present',
            tasks: [
                'Teach high school students programming in JavaScript, UX/UI design with Unity, Java, C++, and Python.',
                'Implemented engaging lessons to cement the understanding of students’ knowledge.',
                'Mentor students in proper programming and design philosophies'
            ]
        },
        {
            work: 'Write Score',
            role: 'Independent Contractor Checker/Scorer',
            dates: 'Oct 21 - Apr 22',
            tasks: [
                'Scoring 7th grade level essays based on Florida and Georgia state educational standards',
                'As a checker, lead team of scorers by ensuring they are scoring within reason.',
                'Provide feedback to scorers to let them know what they are doing right and how they can improve.'
            ]
        },
        {
            work: 'Car Trek',
            role: 'Website Designer',
            dates: 'Jan 18 - Dec 18',
            tasks: [
                'Worked closely with founder on the website’s design.',
                'Organized spreadsheets of user (riders/drivers) information.',
                'Prototyped an automated rider/driver matching system.'
            ]
        }
    ]

</script>


<style>
    .info {
        text-indent: 50px;
    }

    p {
        text-indent: 100px;
    }
</style>