/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://plus.unsplash.com/premium_vector-1721996978878-d28970a11862?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21zfGVufDB8fDB8fHww')",
        'custom-image1':"url('https://plus.unsplash.com/premium_photo-1720210118027-19efec2959b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8')",
        'custom-image2':"url('https://plus.unsplash.com/premium_vector-1683133926893-7236b77abe76?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21zfGVufDB8fDB8fHww')",
        'custom-image3':"url('https://plus.unsplash.com/premium_vector-1683141147347-c6aa70127df2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'custom-image4':"url('/opt/lampp/htdocs/Bulk-sms/TEST/src/assets/q.png')"


      },
      colors: {
        customg:'#00c065',
        customl:'#aeffdb',
        customm:'#009652',
        customx:'#2bfd9e',
        customf:'#d5ffed',
        customq:'#edfff6',
        
      },
    },
  },
  plugins: [],
}