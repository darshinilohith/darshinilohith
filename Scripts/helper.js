var skills = '<div class="col-md-2"><img src="img/%data%.png" alt="skills" class="img responsive img-rounded"></div>';

var skills_array = ['one', '2', '3', '4', '5', '6'];

var skills_new = '';

for(var i= 0; i<skills_array.length;i+=1){
    skills_new = skills.replace('%data%',skills_array[i]);
    $('.row-skills-section-images').append(skills_new);
}


