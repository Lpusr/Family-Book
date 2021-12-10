var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://thumbs.dreamstime.com/b/bearded-happy-man-shows-thumb-up-gesture-cool-vector-illustration-cartoon-style-124097791.jpg", "https://i.pinimg.com/564x/4c/81/73/4c81736c87e5ed7e5274467a2d51ea19.jpg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRmbGr1XizS4dDjPrCmK7BMWDrV4llVld8JXrQGtFRHbAPv4U2rEeWiUQAoyC67RK2OA&usqp=CAU", "https://www.pngkit.com/png/detail/258-2587144_welcome-teenage-girl-cartoon-png.png"];
            var names = ["Family Book","Kiran Bibwe", "Rashmi Bibwe", "Rohit Bibwe", "Trisha Bibwe"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 4
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }

