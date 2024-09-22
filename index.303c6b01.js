document.querySelectorAll("li").forEach(function(e){var t=e.firstChild;if(t.nodeType===Node.TEXT_NODE){var n=document.createElement("span");n.textContent=t.textContent.trim(),e.replaceChild(n,t),n.addEventListener("click",function(){var t=e.querySelector("ul");t&&(t.style.display="none"===t.style.display?"block":"none")})}});
//# sourceMappingURL=index.303c6b01.js.map
