const para=document.getElementById('Paragarph');
const rock_img=document.getElementById('r');
const paper_img=document.getElementById('p');
const scissor_img=document.getElementById('s');
const human_score=document.getElementById('h_score');
const computer_score=document.getElementById('c_score');
var human=0;
var computer=0;
function getRandomInt(max)
{
  return Math.floor(Math.random() * max);
}
function rock_function()
{
	var com=getRandomInt(3);
	var value="";
	if(com==0)
	{
		value = "<p>Compueter Got Rock!! Draw!!<p>";
	}
	else if(com==1)
	{
		human++;
		human_score.innerHTML=human;
		value = "<p>Computer Got Paper !! Win!!<p>";
	}
	else
	{
		computer++;
		computer_score.innerHTML=computer;
		value = "<p>Computer Got Scissor !! Lose!!<p>";
	}
	para.innerHTML = value;
	return;
}
function paper_function()
{
	var com=getRandomInt(3);
	var value="";
	if(com==1)
	{
		value = "<p>Computer Got Paper !! Draw!!<p>";
	}
	else if(com==2)
	{
		human++;
		human_score.innerHTML=human;
		value = "<p>Computer Got Scissor !! Win!!<p>";
	}
	else
	{
		computer++;
		computer_score.innerHTML=computer;
		value = "<p>Compueter Got Rock!! Lose!!<p>";
	}
	para.innerHTML = value;
	return;
}
function scissor_function()
{
	var com=getRandomInt(3);
	var value="";
	if(com==2)
	{
		value = "<p>Computer Got Scissor !! Draw!!<p>";
	}
	else if(com==0)
	{
		human++;
		human_score.innerHTML=human;
		value = "<p>Compueter Got Rock!! Win!!<p>";
	}
	else
	{
		computer++;
		computer_score.innerHTML=computer;
		value = "<p>Computer Got Paper !! Lose!!<p>";
	}
	para.innerHTML = value;
	return;
}