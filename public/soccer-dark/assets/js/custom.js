// Add your custom JS code here
// $(document).ready(function () {
//   fetch(
//     "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kutumbafc"
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       for (var post in data.items) {
//         // Create post elements
//         var post_grid = document.createElement("div");
//         post_grid.classList.add("post-grid__item", "col-sm-6");
//         var post_item = document.createElement("div");
//         post_item.classList.add(
//           "posts__item",
//           "posts__item--card",
//           "posts__item--category-1",
//           "card"
//         );
//         var post_thumb = document.createElement("figure");
//         post_thumb.classList.add("posts__thumb");
//         var post_img_link = document.createElement("a");
//         post_img_link.setAttribute("href", data.items[post].link);
//         var post_img = document.createElement("img");
//         post_img.setAttribute("src", data.items[post].thumbnail);
//         var post_inner = document.createElement("div");
//         post_inner.classList.add("posts__inner", "card__content");
//         var post_cta = document.createElement("a");
//         post_cta.setAttribute("src", data.items[post].link);
//         post_cta.classList.add("posts__cta");
//         var post_date = document.createElement("time");
//         post_date.setAttribute(
//           "datetime",
//           data.items[post].pubDate.slice(0, 10)
//         );
//         post_date.classList.add("posts__date");
//         var post_title = document.createElement("h6");
//         post_title.classList.add("posts__title");
//         var post_title_link = document.createElement("a");
//         post_title_link.setAttribute("src", data.items[post].link);
//         var post_title_link_textnode = document.createTextNode(
//           data.items[post].title
//         );
//         post_title_link.appendChild(post_title_link_textnode);

//         // Appending all children to parents
//         post_title.appendChild(post_title_link);
//         post_inner.appendChild(post_cta);
//         post_inner.appendChild(post_date);
//         post_inner.appendChild(post_title);
//         post_img_link.appendChild(post_img);
//         post_thumb.appendChild(post_img_link);
//         post_item.appendChild(post_thumb);
//         post_item.appendChild(post_inner);
//         post_grid.appendChild(post_item);

//         document.getElementById("blog-posts-container").appendChild(post_grid);
//       }
//     });
// });
