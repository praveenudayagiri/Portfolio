const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#1ABC9C', '#D35400',
    '#C70039', '#900C3F', '#581845', '#FFC300', '#DAF7A6', '#2ECC71', '#3498DB',
    '#9B59B6', '#34495E', '#16A085', '#E74C3C', '#E67E22', '#ECF0F1'
  ];
  const quotes = [
    ["The only limit to our realization of tomorrow is our doubts of today.", "Franklin D. Roosevelt"],
    ["In the middle of every difficulty lies opportunity.", "Albert Einstein"],
    ["Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"],
    ["It does not matter how slowly you go as long as you do not stop.", "Confucius"],
    ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
    ["The only way to do great work is to love what you do.", "Steve Jobs"],
    ["Your time is limited, so don't waste it living someone else's life.", "Steve Jobs"],
    ["The best way to predict the future is to invent it.", "Alan Kay"],
    ["The journey of a thousand miles begins with one step.", "Lao Tzu"],
    ["What lies behind us and what lies before us are tiny matters compared to what lies within us.", "Ralph Waldo Emerson"],
    ["The mind is everything. What you think you become.", "Buddha"],
    ["Act as if what you do makes a difference. It does.", "William James"],
    ["You miss 100% of the shots you don't take.", "Wayne Gretzky"],
    ["Don't watch the clock; do what it does. Keep going.", "Sam Levenson"],
    ["If you're going through hell, keep going.", "Winston Churchill"],
    ["The only place where success comes before work is in the dictionary.", "Vidal Sassoon"],
    ["It always seems impossible until it's done.", "Nelson Mandela"],
    ["The secret of getting ahead is getting started.", "Mark Twain"],
    ["The only way to achieve the impossible is to believe it is possible.", "Charles Kingsleigh"],
    ["Everything you've ever wanted is on the other side of fear.", "George Addair"]
  ];
  const quote=document.querySelector('#quote');
  const author=document.querySelector('#author');
  const submit=document.querySelector('#generate');
  submit.addEventListener('click',print);
  const heading=document.querySelector('h1');
function print()
{
    const rc=Math.round(Math.random() * colors.length);
    const rq=Math.round(Math.random() * quotes.length);
    quote.innerHTML=quotes[rq][0];
    author.innerHTML='-'+quotes[rq][1];
    document.body.style.background=colors[rc];
    heading.style.color=colors[rc];
    submit.style.background=colors[rc];
}