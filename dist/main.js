(()=>{"use strict";class t{project=null;constructor(t,e,s,c){this.title=t,this.description=e,this.date=s,this.priority=c}setProject(t){this.project=t}}class e{constructor(t){this.name=t,this.taskList=[]}addTask(t){this.taskList.push(t)}}class s{static projects=[];static tasks=[];static saveProjects(){localStorage.setItem("projects",JSON.stringify(s.projects))}static saveTask(){localStorage.setItem("tasks",JSON.stringify(s.tasks))}static loadProjects(){const t=localStorage.getItem("projects");if(t){const c=JSON.parse(t);s.projects=c.map((t=>{const s=new e(t.name);return s.taskList=t.taskList,s}))}else s.createDefaultProject()}static loadTasks(){const t=localStorage.getItem("tasks");t&&(s.tasks=JSON.parse(t))}static createDefaultProject(){const t=new e("Default Project");s.projects.push(t),s.saveProjects()}}function c(t){const e=document.querySelector(".projects"),s=document.createElement("div");s.textContent=t,s.classList.add("project"),e.appendChild(s)}function o(t){const e=document.querySelector(".tasks"),s=document.createElement("div");s.textContent=t,s.classList.add("task"),e.appendChild(s)}function a(t){document.querySelector(".tasks").innerHTML="";const e=s.projects.find((e=>e.name===t));e&&e.taskList.forEach((t=>{o(t.title)}))}s.loadProjects(),function(){const r=document.querySelector(".createProjectBtn"),n=document.querySelector(".projectName"),i=document.getElementById("taskModal"),l=document.querySelector(".createTaskBtn"),d=document.querySelector(".taskTitle"),u=document.querySelector(".taskDescription"),m=document.querySelector(".taskDate"),p=document.querySelector(".taskPriority"),j=document.querySelector(".projects"),k=document.querySelector(".openModalBtn"),y=document.querySelector(".modal .close");r.addEventListener("click",(()=>{const t=n.value.trim();t&&(function(t){const c=new e(t);s.projects.push(c),s.saveProjects()}(t),c(t),n.value="",console.log("Project created"))})),k.addEventListener("click",(()=>{i.style.display="block"})),y.addEventListener("click",(()=>{i.style.display="none"})),window.addEventListener("click",(t=>{t.target===i&&(i.style.display="none")})),l.addEventListener("click",(()=>{const e=document.querySelector(".project.active");if(e){const c=e.textContent.trim(),a=d.value.trim(),r=u.value.trim(),n=m.value,l=p.value;a&&r&&n&&l&&(function(e,c,o,a,r){const n=new t(c,o,a,r),i=s.projects.find((t=>t.name===e));i&&(i.addTask(n),s.saveProjects())}(c,a,r,n,l),o(a),d.value="",u.value="",m.value="",p.value="",i.style.display="none",console.log("Task created"))}})),j.addEventListener("click",(t=>{t.target.classList.contains("project")&&(document.querySelectorAll(".project").forEach((t=>t.classList.remove("active"))),t.target.classList.add("active"),a(t.target.textContent.trim()))})),function(){if(s.loadProjects(),s.projects.forEach((t=>{c(t.name)})),s.projects.length>0){const t=document.querySelector(".project");t.classList.add("active"),a(t.textContent.trim())}}()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TixPQUFPakMsVUFBVXdDLFNBQVMsYUFDNUI3QyxTQUFTOEMsaUJBQWlCLFlBQVk5QixTQUFRRCxHQUFRQSxFQUFLVixVQUFVMEMsT0FBTyxZQUM1RUgsRUFBRU4sT0FBT2pDLFVBQVVDLElBQUksVUFDdkJNLEVBQW9CZ0MsRUFBRU4sT0FBT2xDLFlBQVkwQixRQUM3QyxJQXNCUixXQUtJLEdBSkFwRCxFQUFRVSxlQUNSVixFQUFRTyxTQUFTK0IsU0FBUXBELElBQ3JCaUMsRUFBZWpDLEVBQVFTLEtBQUssSUFFNUJLLEVBQVFPLFNBQVMrRCxPQUFTLEVBQUcsQ0FDN0IsTUFBTUMsRUFBZWpELFNBQVNDLGNBQWMsWUFDNUNnRCxFQUFhNUMsVUFBVUMsSUFBSSxVQUMzQk0sRUFBb0JxQyxFQUFhN0MsWUFBWTBCLE9BQ2pELENBQ0osQ0E3QklvQixFQUNKLENDbEVBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9Eb21TdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL0xvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3tcblxuICAgIHByb2plY3QgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIHNldFByb2plY3QocHJvamVjdCl7XG4gICAgICAgIHRoaXMucHJvamVjdD1wcm9qZWN0O1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3R7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGFzayl7XG4gICAgICAgIHRoaXMudGFza0xpc3QucHVzaCh0YXNrKVxuICAgIH1cblxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZXtcblxuICAgIHN0YXRpYyBwcm9qZWN0cyA9IFtdO1xuICAgIHN0YXRpYyB0YXNrcyA9IFtdO1xuXG4gICAgc3RhdGljIHNhdmVQcm9qZWN0cygpe1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsSlNPTi5zdHJpbmdpZnkoU3RvcmFnZS5wcm9qZWN0cykpXG4gICAgfVxuXG4gICAgc3RhdGljIHNhdmVUYXNrKCl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoU3RvcmFnZS50YXNrcykpXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICAgICAgICBpZiAocHJvamVjdHMpIHtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE9iamVjdHMgPSBKU09OLnBhcnNlKHByb2plY3RzKTtcbiAgICAgICAgICAgIFN0b3JhZ2UucHJvamVjdHMgPSBwcm9qZWN0T2JqZWN0cy5tYXAocHJvamVjdERhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0RGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tMaXN0ID0gcHJvamVjdERhdGEudGFza0xpc3Q7IC8vIEFzc3VtaW5nIHRhc2tzIGFyZSBzaW1wbGUgb2JqZWN0cyBoZXJlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIFN0b3JhZ2UuY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkVGFza3MoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKTtcbiAgICAgICAgaWYgKHRhc2tzKSB7XG4gICAgICAgICAgICBTdG9yYWdlLnRhc2tzID0gSlNPTi5wYXJzZSh0YXNrcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRGVmYXVsdFByb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcpO1xuICAgICAgICBTdG9yYWdlLnByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xuICAgICAgICBTdG9yYWdlLnNhdmVQcm9qZWN0cygpO1xuICAgIH1cblxuXG5cbn0iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBjcmVhdGVUYXNrIH0gZnJvbSAnLi9Mb2dpYyc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEhhbmRsZXIoKSB7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVQcm9qZWN0QnRuJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TmFtZScpO1xuICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTW9kYWwnKTtcbiAgICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZVRhc2tCdG4nKTtcbiAgICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGl0bGUnKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tEYXRlJyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ByaW9yaXR5Jyk7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBjb25zdCBvcGVuTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbk1vZGFsQnRuJyk7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCAuY2xvc2UnKTtcblxuICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHJvamVjdCBjcmVhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIG9wZW5Nb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0pO1xuXG4gICAgY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGFza01vZGFsKSB7XG4gICAgICAgICAgICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LmFjdGl2ZScpO1xuICAgICAgICBpZiAoYWN0aXZlUHJvamVjdCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBhY3RpdmVQcm9qZWN0LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tUaXRsZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gdGFza0RhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tQcmlvcml0eUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgaWYgKHRhc2tUaXRsZSAmJiB0YXNrRGVzY3JpcHRpb24gJiYgdGFza0RhdGUgJiYgdGFza1ByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlVGFzayhwcm9qZWN0TmFtZSwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrKHRhc2tUaXRsZSk7XG4gICAgICAgICAgICAgICAgdGFza1RpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRhc2tEYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB0YXNrUHJpb3JpdHlJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUYXNrIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0JykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JykuZm9yRWFjaChwcm9qID0+IHByb2ouY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBsb2FkQW5kRGlzcGxheVRhc2tzKGUudGFyZ2V0LnRleHRDb250ZW50LnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxvYWRBbmREaXNwbGF5UHJvamVjdHMoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFzayh0YXNrVGl0bGUpIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0VsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrVGl0bGU7XG4gICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gbG9hZEFuZERpc3BsYXlQcm9qZWN0cygpIHtcbiAgICBTdG9yYWdlLmxvYWRQcm9qZWN0cygpO1xuICAgIFN0b3JhZ2UucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdC5uYW1lKTtcbiAgICB9KTtcbiAgICBpZiAoU3RvcmFnZS5wcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XG4gICAgICAgIGZpcnN0UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgbG9hZEFuZERpc3BsYXlUYXNrcyhmaXJzdFByb2plY3QudGV4dENvbnRlbnQudHJpbSgpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRBbmREaXNwbGF5VGFza3MocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHByb2plY3QgPSBTdG9yYWdlLnByb2plY3RzLmZpbmQocHJvaiA9PiBwcm9qLm5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0LnRhc2tMaXN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VGFzayh0YXNrLnRpdGxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IHByb2plY3RIYW5kbGVyIH0gZnJvbSAnLi9tb2R1bGVzL0RvbVN0dWZmJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vbW9kdWxlcy9TdG9yYWdlJztcblxuU3RvcmFnZS5sb2FkUHJvamVjdHMoKTtcbnByb2plY3RIYW5kbGVyKCk7XG5cblxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZVwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpe1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICBTdG9yYWdlLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdHMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2socHJvamVjdE5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgY29uc3QgcHJvamVjdCA9IFN0b3JhZ2UucHJvamVjdHMuZmluZChwcm9qID0+IHByb2oubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgIHByb2plY3QuYWRkVGFzayh0YXNrKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlUHJvamVjdHMoKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiVGFzayIsInByb2plY3QiLCJjb25zdHJ1Y3RvciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwicHJpb3JpdHkiLCJ0aGlzIiwic2V0UHJvamVjdCIsIlByb2plY3QiLCJuYW1lIiwidGFza0xpc3QiLCJhZGRUYXNrIiwidGFzayIsInB1c2giLCJTdG9yYWdlIiwic3RhdGljIiwic2F2ZVByb2plY3RzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9qZWN0cyIsInNhdmVUYXNrIiwidGFza3MiLCJsb2FkUHJvamVjdHMiLCJnZXRJdGVtIiwicHJvamVjdE9iamVjdHMiLCJwYXJzZSIsIm1hcCIsInByb2plY3REYXRhIiwiY3JlYXRlRGVmYXVsdFByb2plY3QiLCJsb2FkVGFza3MiLCJkZWZhdWx0UHJvamVjdCIsImRpc3BsYXlQcm9qZWN0IiwicHJvamVjdE5hbWUiLCJwcm9qZWN0c0NvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2plY3RFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJkaXNwbGF5VGFzayIsInRhc2tUaXRsZSIsInRhc2tzQ29udGFpbmVyIiwidGFza0VsZW1lbnQiLCJsb2FkQW5kRGlzcGxheVRhc2tzIiwiaW5uZXJIVE1MIiwiZmluZCIsInByb2oiLCJmb3JFYWNoIiwicHJvamVjdEJ1dHRvbiIsInByb2plY3ROYW1lSW5wdXQiLCJ0YXNrTW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsInRhc2tCdXR0b24iLCJ0YXNrVGl0bGVJbnB1dCIsInRhc2tEZXNjcmlwdGlvbklucHV0IiwidGFza0RhdGVJbnB1dCIsInRhc2tQcmlvcml0eUlucHV0Iiwib3Blbk1vZGFsQnRuIiwiY2xvc2VNb2RhbEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsInRyaW0iLCJjcmVhdGVQcm9qZWN0IiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImV2ZW50IiwidGFyZ2V0IiwiYWN0aXZlUHJvamVjdCIsInRhc2tEZXNjcmlwdGlvbiIsInRhc2tEYXRlIiwidGFza1ByaW9yaXR5IiwiY3JlYXRlVGFzayIsImUiLCJjb250YWlucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmUiLCJsZW5ndGgiLCJmaXJzdFByb2plY3QiLCJsb2FkQW5kRGlzcGxheVByb2plY3RzIiwicHJvamVjdEhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9