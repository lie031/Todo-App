(()=>{"use strict";class t{static todos=[];static setTodo(t,e,o){const n={title:t,description:e,date:o};this.todos.push(n)}static getTodos(){return this.todos}static deleteTodo(t){this.todos.splice(t,1),this.saveTodos()}static saveTodos(){localStorage.setItem("allTodos",JSON.stringify(this.getTodos()))}static storageTodos(){return JSON.parse(localStorage.getItem("allTodos"))}}class e{constructor(){this.modal=document.querySelector("#modal"),this.newTodoBtn=document.querySelector(".new-todo"),this.content=document.querySelector(".content"),this.modalTitle=document.querySelector("#title"),this.modalDescription=document.querySelector("#description"),this.modalDate=document.querySelector("#date"),this.modalBtn=document.querySelector("#addBtn"),this.home=document.querySelector("#home"),this.today=document.querySelector("#today"),this.week=document.querySelector("#week")}addTodo(){const e=document.createElement("div"),o=document.createElement("p"),n=document.createElement("p"),d=document.createElement("p"),l=document.createElement("button");o.textContent=this.modalTitle.value,n.textContent=this.modalDescription.value,d.textContent=this.modalDate.value,l.textContent="delete",l.classList.add("delete-btn"),e.appendChild(o),e.appendChild(n),e.appendChild(d),e.appendChild(l),this.content.appendChild(e),t.setTodo(o.textContent,n.textContent,d.textContent),t.saveTodos(),console.log(t.getTodos())}renderTodos(){const e=t.storageTodos();t.todos=e,console.log(e),null!==e&&e.forEach((t=>{const e=document.createElement("div"),o=document.createElement("p"),n=document.createElement("p"),d=document.createElement("p"),l=document.createElement("button");o.textContent=t.title,n.textContent=t.description,d.textContent=t.date,l.textContent="delete",l.classList.add("delete-btn"),e.appendChild(o),e.appendChild(n),e.appendChild(d),e.appendChild(l),this.content.appendChild(e)}))}renderTodaytodos(){const e=t.storageTodos(),o=new Date,n=`${o.getFullYear()}-${(o.getMonth()+1).toString().padStart(2,"0")}-${o.getDate().toString().padStart(2,"0")}`;console.log(n),e.forEach((t=>console.log(t.date)));const d=e.filter((t=>t.date==n));console.log(d),null!==d&&d.forEach((t=>{const e=document.createElement("div"),o=document.createElement("p"),n=document.createElement("p"),d=document.createElement("p"),l=document.createElement("button");o.textContent=t.title,n.textContent=t.description,d.textContent=t.date,l.textContent="delete",l.classList.add("delete-btn"),e.appendChild(o),e.appendChild(n),e.appendChild(d),e.appendChild(l),this.content.appendChild(e)}))}}const o=new e;class n{static modalAddBtn(){o.modalBtn.addEventListener("click",(()=>{""!==o.modalTitle.value&&o.addTodo()}))}static openModal(){o.newTodoBtn.addEventListener("click",(()=>{o.modal.showModal()})),o.modal.addEventListener("click",(t=>{t.target===modal&&modal.close()}))}static clickEvent(){o.content.addEventListener("click",(e=>{if(e.target.classList.contains("delete-btn")){const n=Array.from(o.content.children).indexOf(e.target.parentElement);console.log(n),t.deleteTodo(n),e.target.parentElement.remove()}})),o.home.addEventListener("click",(()=>{o.content.innerHTML="",o.renderTodos()})),o.today.addEventListener("click",(()=>{o.content.innerHTML="",o.renderTodaytodos()}))}}const d=new e;n.modalAddBtn(),n.openModal(),n.clickEvent(),d.renderTodos()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQWUsTUFBTUEsRUFFaEJDLGFBQWUsR0FFZixjQUFPQyxDQUFRQyxFQUFNQyxFQUFZQyxHQUM5QixNQUFNQyxFQUFPLENBQ1RILFFBQ0FDLGNBQ0FDLFFBRUpFLEtBQUtDLE1BQU1DLEtBQUtILEVBQ3BCLENBRUMsZUFBT0ksR0FDSixPQUFPSCxLQUFLQyxLQUNoQixDQUVBLGlCQUFPRyxDQUFXQyxHQUNkTCxLQUFLQyxNQUFNSyxPQUFPRCxFQUFFLEdBQ3BCTCxLQUFLTyxXQUVULENBRUEsZ0JBQU9BLEdBQ0hDLGFBQWFDLFFBQVEsV0FBV0MsS0FBS0MsVUFBVVgsS0FBS0csWUFDeEQsQ0FFQSxtQkFBT1MsR0FFSCxPQURpQkYsS0FBS0csTUFBTUwsYUFBYU0sUUFBUSxZQUVyRCxFQzVCVyxNQUFNQyxFQUNqQixXQUFBQyxHQUNBaEIsS0FBS2lCLE1BQU9DLFNBQVNDLGNBQWMsVUFDbkNuQixLQUFLb0IsV0FBYUYsU0FBU0MsY0FBYyxhQUN6Q25CLEtBQUtxQixRQUFVSCxTQUFTQyxjQUFjLFlBQ3RDbkIsS0FBS3NCLFdBQWFKLFNBQVNDLGNBQWMsVUFDekNuQixLQUFLdUIsaUJBQW1CTCxTQUFTQyxjQUFjLGdCQUMvQ25CLEtBQUt3QixVQUFZTixTQUFTQyxjQUFjLFNBQ3hDbkIsS0FBS3lCLFNBQVdQLFNBQVNDLGNBQWMsV0FDdkNuQixLQUFLMEIsS0FBT1IsU0FBU0MsY0FBYyxTQUNuQ25CLEtBQUsyQixNQUFRVCxTQUFTQyxjQUFjLFVBQ3BDbkIsS0FBSzRCLEtBQU9WLFNBQVNDLGNBQWMsUUFDbkMsQ0FFQSxPQUFBVSxHQUNJLE1BQU05QixFQUFPbUIsU0FBU1ksY0FBYyxPQUM5QmxDLEVBQVFzQixTQUFTWSxjQUFjLEtBQy9CakMsRUFBY3FCLFNBQVNZLGNBQWMsS0FDckNoQyxFQUFPb0IsU0FBU1ksY0FBYyxLQUM5QkMsRUFBWWIsU0FBU1ksY0FBYyxVQUV6Q2xDLEVBQU1vQyxZQUFjaEMsS0FBS3NCLFdBQVdXLE1BQ3BDcEMsRUFBWW1DLFlBQWNoQyxLQUFLdUIsaUJBQWlCVSxNQUNoRG5DLEVBQUtrQyxZQUFjaEMsS0FBS3dCLFVBQVVTLE1BQ2xDRixFQUFVQyxZQUFjLFNBQ3hCRCxFQUFVRyxVQUFVQyxJQUFJLGNBRXhCcEMsRUFBS3FDLFlBQVl4QyxHQUNqQkcsRUFBS3FDLFlBQVl2QyxHQUNqQkUsRUFBS3FDLFlBQVl0QyxHQUNqQkMsRUFBS3FDLFlBQVlMLEdBRWpCL0IsS0FBS3FCLFFBQVFlLFlBQVlyQyxHQUN6Qk4sRUFBUUUsUUFBUUMsRUFBTW9DLFlBQVluQyxFQUFZbUMsWUFBWWxDLEVBQUtrQyxhQUMvRHZDLEVBQVFjLFlBQ1I4QixRQUFRQyxJQUFJN0MsRUFBUVUsV0FDeEIsQ0FFQSxXQUFBb0MsR0FDSyxNQUFNdEMsRUFBUVIsRUFBUW1CLGVBQ3RCbkIsRUFBUVEsTUFBUUEsRUFDaEJvQyxRQUFRQyxJQUFJckMsR0FFRCxPQUFSQSxHQUNBQSxFQUFNdUMsU0FBUUMsSUFDZCxNQUFNMUMsRUFBT21CLFNBQVNZLGNBQWMsT0FDOUJsQyxFQUFRc0IsU0FBU1ksY0FBYyxLQUMvQmpDLEVBQWNxQixTQUFTWSxjQUFjLEtBQ3JDaEMsRUFBT29CLFNBQVNZLGNBQWMsS0FDOUJDLEVBQVliLFNBQVNZLGNBQWMsVUFFekNsQyxFQUFNb0MsWUFBY1MsRUFBRTdDLE1BQ3RCQyxFQUFZbUMsWUFBY1MsRUFBRTVDLFlBQzVCQyxFQUFLa0MsWUFBY1MsRUFBRTNDLEtBQ3JCaUMsRUFBVUMsWUFBYyxTQUN4QkQsRUFBVUcsVUFBVUMsSUFBSSxjQUV4QnBDLEVBQUtxQyxZQUFZeEMsR0FDakJHLEVBQUtxQyxZQUFZdkMsR0FDakJFLEVBQUtxQyxZQUFZdEMsR0FDakJDLEVBQUtxQyxZQUFZTCxHQUVqQi9CLEtBQUtxQixRQUFRZSxZQUFZckMsRUFBSyxHQUd0QyxDQUVBLGdCQUFBMkMsR0FDSSxNQUFNekMsRUFBUVIsRUFBUW1CLGVBQ2hCZCxFQUFPLElBQUk2QyxLQUlYQyxFQUFZLEdBSEw5QyxFQUFLK0Msa0JBQ0gvQyxFQUFLZ0QsV0FBVyxHQUFHQyxXQUFXQyxTQUFTLEVBQUUsUUFDNUNsRCxFQUFLbUQsVUFBVUYsV0FBV0MsU0FBUyxFQUFFLE9BRWpEWCxRQUFRQyxJQUFJTSxHQUNaM0MsRUFBTXVDLFNBQVF6QyxHQUFNc0MsUUFBUUMsSUFBSXZDLEVBQUtELFFBQ3JDLE1BQU1vRCxFQUFjakQsRUFBTWtELFFBQVFwRCxHQUFPQSxFQUFLRCxNQUFROEMsSUFDdERQLFFBQVFDLElBQUlZLEdBRUssT0FBZEEsR0FDQ0EsRUFBWVYsU0FBUUMsSUFDcEIsTUFBTTFDLEVBQU9tQixTQUFTWSxjQUFjLE9BQzlCbEMsRUFBUXNCLFNBQVNZLGNBQWMsS0FDL0JqQyxFQUFjcUIsU0FBU1ksY0FBYyxLQUNyQ2hDLEVBQU9vQixTQUFTWSxjQUFjLEtBQzlCQyxFQUFZYixTQUFTWSxjQUFjLFVBRXpDbEMsRUFBTW9DLFlBQWNTLEVBQUU3QyxNQUN0QkMsRUFBWW1DLFlBQWNTLEVBQUU1QyxZQUM1QkMsRUFBS2tDLFlBQWNTLEVBQUUzQyxLQUNyQmlDLEVBQVVDLFlBQWMsU0FDeEJELEVBQVVHLFVBQVVDLElBQUksY0FFeEJwQyxFQUFLcUMsWUFBWXhDLEdBQ2pCRyxFQUFLcUMsWUFBWXZDLEdBQ2pCRSxFQUFLcUMsWUFBWXRDLEdBQ2pCQyxFQUFLcUMsWUFBWUwsR0FFakIvQixLQUFLcUIsUUFBUWUsWUFBWXJDLEVBQUssR0FHdEMsRUNyR0osTUFBTXFELEVBQWEsSUFBSXJDLEVBQ1IsTUFBTXNDLEVBRWpCLGtCQUFPQyxHQUNIRixFQUFXM0IsU0FBUzhCLGlCQUFpQixTQUFRLEtBQ04sS0FBaENILEVBQVc5QixXQUFXVyxPQUN4Qm1CLEVBQVd2QixTQUNaLEdBRVIsQ0FFQSxnQkFBTzJCLEdBQ0hKLEVBQVdoQyxXQUFXbUMsaUJBQWlCLFNBQVEsS0FDekNILEVBQVduQyxNQUFNd0MsV0FBVyxJQUVsQ0wsRUFBV25DLE1BQU1zQyxpQkFBaUIsU0FBVUcsSUFDcENBLEVBQU1DLFNBQVcxQyxPQUNqQkEsTUFBTTJDLE9BQ1YsR0FFUixDQUVBLGlCQUFPQyxHQUVIVCxFQUFXL0IsUUFBUWtDLGlCQUFpQixTQUFVRyxJQUMxQyxHQUFJQSxFQUFNQyxPQUFPekIsVUFBVTRCLFNBQVMsY0FBZSxDQUUvQyxNQUFNQyxFQUFRQyxNQUFNQyxLQUFLYixFQUFXL0IsUUFBUTZDLFVBQVVDLFFBQVFULEVBQU1DLE9BQU9TLGVBQzNFL0IsUUFBUUMsSUFBSXlCLEdBR1p0RSxFQUFRVyxXQUFXMkQsR0FHbkJMLEVBQU1DLE9BQU9TLGNBQWNDLFFBRS9CLEtBR0pqQixFQUFXMUIsS0FBSzZCLGlCQUFpQixTQUFRLEtBQ3JDSCxFQUFXL0IsUUFBUWlELFVBQVksR0FDL0JsQixFQUFXYixhQUFhLElBRzVCYSxFQUFXekIsTUFBTTRCLGlCQUFpQixTQUFRLEtBQ3RDSCxFQUFXL0IsUUFBUWlELFVBQVksR0FDL0JsQixFQUFXVixrQkFBa0IsR0FFckMsRUMvQ0osTUFBTTZCLEVBQU0sSUFBSXhELEVBRWhCc0MsRUFBU0MsY0FDVEQsRUFBU0csWUFDVEgsRUFBU1EsYUFDVFUsRUFBSWhDLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdle1xuXG4gICAgIHN0YXRpYyB0b2RvcyA9IFtdO1xuXG4gICAgIHN0YXRpYyBzZXRUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGRhdGUpe1xuICAgICAgICBjb25zdCB0b2RvID0ge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRhdGVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgIHN0YXRpYyBnZXRUb2Rvcygpe1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlVG9kbyhpKXtcbiAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaSwxKTtcbiAgICAgICAgdGhpcy5zYXZlVG9kb3MoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhdGljIHNhdmVUb2Rvcygpe1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFRvZG9zXCIsSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRUb2RvcygpKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHN0b3JhZ2VUb2Rvcygpe1xuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxUb2Rvc1wiKSk7XG4gICAgICAgIHJldHVybiBhbGxUb2RvcztcbiAgICB9XG59XG4iLCJpbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMubW9kYWwgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpO1xuICAgIHRoaXMubmV3VG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kbycpO1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgdGhpcy5tb2RhbFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgdGhpcy5tb2RhbERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgdGhpcy5tb2RhbERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuICAgIHRoaXMubW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQnRuJyk7XG4gICAgdGhpcy5ob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbiAgICB0aGlzLnRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XG4gICAgdGhpcy53ZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlZWsnKTtcbiAgICB9XG4gICAgXG4gICAgYWRkVG9kbygpe1xuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRoaXMubW9kYWxUaXRsZS52YWx1ZTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLm1vZGFsRGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0aGlzLm1vZGFsRGF0ZS52YWx1ZTtcbiAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7XG5cbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRvZG8pO1xuICAgICAgICBTdG9yYWdlLnNldFRvZG8odGl0bGUudGV4dENvbnRlbnQsZGVzY3JpcHRpb24udGV4dENvbnRlbnQsZGF0ZS50ZXh0Q29udGVudCk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9zKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFN0b3JhZ2UuZ2V0VG9kb3MoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyVG9kb3MoKXtcbiAgICAgICAgIGNvbnN0IHRvZG9zID0gU3RvcmFnZS5zdG9yYWdlVG9kb3MoKTtcbiAgICAgICAgIFN0b3JhZ2UudG9kb3MgPSB0b2RvcztcbiAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9zKTtcblxuICAgICAgICAgaWYodG9kb3MhPT1udWxsKXtcbiAgICAgICAgICAgIHRvZG9zLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHQudGl0bGU7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHQuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gdC5kYXRlO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRvZG8pO1xuICAgICAgICAgfSk7XG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyVG9kYXl0b2Rvcygpe1xuICAgICAgICBjb25zdCB0b2RvcyA9IFN0b3JhZ2Uuc3RvcmFnZVRvZG9zKCk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkrMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCcwJyk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwnMCcpO1xuICAgICAgICBjb25zdCB0b2RheURhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RheURhdGUpO1xuICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG89PmNvbnNvbGUubG9nKHRvZG8uZGF0ZSkpO1xuICAgICAgICBjb25zdCB0b2Rvc2ZpbHRlciA9IHRvZG9zLmZpbHRlcigodG9kbyk9PnRvZG8uZGF0ZSA9PSB0b2RheURhdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2Rvc2ZpbHRlcik7XG5cbiAgICAgICAgaWYodG9kb3NmaWx0ZXIhPT1udWxsKXtcbiAgICAgICAgICAgIHRvZG9zZmlsdGVyLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHQudGl0bGU7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHQuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gdC5kYXRlO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRvZG8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxufSBcbiIsImltcG9ydCBEb20gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5jb25zdCBkb21IYW5kbGVyID0gbmV3IERvbSgpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlcnN7XG4gICAgXG4gICAgc3RhdGljIG1vZGFsQWRkQnRuKCl7XG4gICAgICAgIGRvbUhhbmRsZXIubW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBpZihkb21IYW5kbGVyLm1vZGFsVGl0bGUudmFsdWUgIT09IFwiXCIpe1xuICAgICAgICAgICAgIGRvbUhhbmRsZXIuYWRkVG9kbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgb3Blbk1vZGFsKCl7XG4gICAgICAgIGRvbUhhbmRsZXIubmV3VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgICAgZG9tSGFuZGxlci5tb2RhbC5zaG93TW9kYWwoKTsgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgZG9tSGFuZGxlci5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgICBcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xpY2tFdmVudCgpIHtcbiAgICAgICAgLy8gVXNlIGV2ZW50IGRlbGVnYXRpb24gdG8gaGFuZGxlIGR5bmFtaWNhbGx5IGFkZGVkIGRlbGV0ZSBidXR0b25zXG4gICAgICAgIGRvbUhhbmRsZXIuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1idG4nKSkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGNsaWNrZWQgZGVsZXRlIGJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gQXJyYXkuZnJvbShkb21IYW5kbGVyLmNvbnRlbnQuY2hpbGRyZW4pLmluZGV4T2YoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBEZWxldGUgdGhlIHRvZG8gZnJvbSBzdG9yYWdlXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5kZWxldGVUb2RvKGluZGV4KTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHRvZG8gZnJvbSB0aGUgRE9NXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9tSGFuZGxlci5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgZG9tSGFuZGxlci5jb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBkb21IYW5kbGVyLnJlbmRlclRvZG9zKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvbUhhbmRsZXIudG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBkb21IYW5kbGVyLmNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGRvbUhhbmRsZXIucmVuZGVyVG9kYXl0b2RvcygpO1xuICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgSGFuZGxlcnMgZnJvbSBcIi4vbW9kdWxlcy9oYW5kbGVyc1wiO1xuaW1wb3J0IERvbSBmcm9tIFwiLi9tb2R1bGVzL2RvbVwiO1xuXG5jb25zdCBkb20gPSBuZXcgRG9tKCk7XG5cbkhhbmRsZXJzLm1vZGFsQWRkQnRuKCk7XG5IYW5kbGVycy5vcGVuTW9kYWwoKTtcbkhhbmRsZXJzLmNsaWNrRXZlbnQoKTtcbmRvbS5yZW5kZXJUb2RvcygpO1xuXG4iXSwibmFtZXMiOlsiU3RvcmFnZSIsInN0YXRpYyIsInNldFRvZG8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsInRvZG8iLCJ0aGlzIiwidG9kb3MiLCJwdXNoIiwiZ2V0VG9kb3MiLCJkZWxldGVUb2RvIiwiaSIsInNwbGljZSIsInNhdmVUb2RvcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwic3RvcmFnZVRvZG9zIiwicGFyc2UiLCJnZXRJdGVtIiwiRG9tIiwiY29uc3RydWN0b3IiLCJtb2RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5ld1RvZG9CdG4iLCJjb250ZW50IiwibW9kYWxUaXRsZSIsIm1vZGFsRGVzY3JpcHRpb24iLCJtb2RhbERhdGUiLCJtb2RhbEJ0biIsImhvbWUiLCJ0b2RheSIsIndlZWsiLCJhZGRUb2RvIiwiY3JlYXRlRWxlbWVudCIsImRlbGV0ZUJ0biIsInRleHRDb250ZW50IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJUb2RvcyIsImZvckVhY2giLCJ0IiwicmVuZGVyVG9kYXl0b2RvcyIsIkRhdGUiLCJ0b2RheURhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImdldERhdGUiLCJ0b2Rvc2ZpbHRlciIsImZpbHRlciIsImRvbUhhbmRsZXIiLCJIYW5kbGVycyIsIm1vZGFsQWRkQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5Nb2RhbCIsInNob3dNb2RhbCIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2UiLCJjbGlja0V2ZW50IiwiY29udGFpbnMiLCJpbmRleCIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwiaW5kZXhPZiIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJkb20iXSwic291cmNlUm9vdCI6IiJ9