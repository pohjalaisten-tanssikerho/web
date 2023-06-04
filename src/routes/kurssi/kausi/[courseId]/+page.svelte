<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
  const { courses, dances } = data

  const formatDate = ( dance: string ) => { 
    const dates = dance.split('-') 
    return dates[2] + '.' + dates[1] + '.'
  }

</script>
<h1>{ courses[data.params.courseId].title }</h1>
{ @html courses[data.params.courseId].content }
<table class="course-table">
  { #each data.dances as dance }
  <tr>
    <th class="date">{ formatDate(dance.date) }</th>
    <td>{ dance.dance }</td>
  </tr>
  { /each }
</table>

<style lang="scss">
  %table-data {
    color: var(--color-white);
    border-collapse: collapse;
    border-style: hidden;
    tr {
      text-align: center;
      th { 
        height: 30px;
        border: 2px solid #d0d0d0;
        padding: 4px;
        font-weight: normal;
        font-size: 14px;
      }
      td { 
        height: 30px;
        border: 2px solid #d0d0d0;
        padding: 4px;
        font-weight: normal;
        font-size: 14px;
      }
      .dark-background {
        // background-color: $opacity-half;
      }
    }
    .date {
      text-align: right;
    }
  }
  .course-table {
    @extend %table-data;
    th:not(:first-child) {
      min-width: 110px;
    }
  }
</style>
