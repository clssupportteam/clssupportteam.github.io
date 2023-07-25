//  GET HTML TABLE
let table1 = document.getElementById("dailyProd");
let table2 = document.getElementById("dailyStatus");


// AJAX FETCH CSV FILE
fetch("dailyProd.csv")
.then(res => res.text())
.then(csv => {
  table1.innerHTML = "";
  for (let row of CSV.parse(csv)) {
    let tr = table1.insertRow();
    for (let col of row) {
      let td = tr.insertCell();
      td.innerHTML = col;
    }
  }
});

// AJAX FETCH CSV FILE
fetch("dailyStatus.csv")
.then(res => res.text())
.then(csv => {
  table2.innerHTML = "";
  for (let row of CSV.parse(csv)) {
    let tr = table2.insertRow();
    for (let col of row) {
      let td = tr.insertCell();
      td.innerHTML = col;
    }
  }
});

///////////////////////////////////////////
//           CUSTOM ELEMENTS             //
///////////////////////////////////////////


class sopTable1 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

<h2>Glossary of Productivity Metrics</h2>
      <table class="standardsOfPerformance">
        <tr>
          <th>Metric</th>
          <th>Definition</th>
          <th>Expected Standard of Performance</th>
        </tr>
        <tr>
          <td>Logged In</td>
          <td>The "logged in time" is the total time logged into Genesys, starting from when a user first logs in at the
            beginning of their shift, and stops when the user shuts down Genesys at the end of their shift.</td>
          <td>Logged in should be 8 Hrs and 30 Mins - Full Time.</td>
        </tr>
        <tr>
          <td>CFT</td>
          <td>CFT is your "Customer Facing Time". This is calculated by adding your Interacting time and Idle time
            together, then dividing the total into your logged in time. This metric shows the proportion of your time
            spent available for customers. </td>
          <td>CFT should be a minimum of 80%</td>
        </tr>
        <tr>
          <td>Calls</td>
          <td>This is the daily number of outbound dials made by an agent.</td>
          <td>Dials should be at 80 - 100 per day for full time colleagues.</td>
        </tr>
        <tr>
          <td>Contacts</td>
          <td>This is the daily number of Contacts an agent makes. A contact is defined as a conversation with a
            decision
            maker and results in either a booking, or an objection. Non-contacts are calls where we don't speak to a
            decision maker, such as a Call Back, No Answer, or Voicemail. These go back into the dialler to be tried
            again at a later time.</td>
          <td>If you hit the dials target you should easily be achieving good level of contacts.</td>
        </tr>
        <tr>
          <td>Booking</td>
          <td>This is the daily number of meetings booked.</td>
          <td>15% of Contacts should result in a booking, so at least 5 per day for a full time agent.</td>
        </tr>
        <tr>
          <td>CVR%</td>
          <td>CVR% stands for conversion, which is calculated by dividing Bookings into Contacts. </td>
          <td>As stated above, CVR% should ideally be 15% (13-15% if all other performance metrics are achieved for the period)</td>
        </tr>
        <tr>
          <td>Transfer</td>
          <td>This is how many transfers have been made to consultancy for an instant quote. These are included within
            the booking total.</td>
          <td>You should aim to transfer at least one client per day, by asking on every call where appropriate.</td>
        </tr>
        <tr>
          <td>AHT</td>
          <td>AHT stands for average handling time and shows the average time spent on each call.</td>
          <td>AHT usually sits around 3 mins as a team average. If AHT is much lower than this it can impact conversion rate, whereas a very high AHT may result in less calls.
          </td>
        </tr>
        <tr>
          <td>ACW</td>
          <td>ACW is "After Call Work". This is the after call state the dialler moves you to, once the client call has
            been released. ACW is ended once you select a wrap up code and make yourself available for the next call.
          </td>
          <td>AHT should be less than 25% of call time as an average, which is about 45s on an average call time of 3 minutes.
          </td>
        </tr>
        <tr>
          <td>Call/Hr</td>
          <td>This is the average number of calls made per hour while logged on. It is calculated by dividing the number
            of calls into "LoggedIn" time.</td>
          <td>To hit the daily dial target of 80 calls, an agent should be achieving around 10 Calls/Hr.</td>
        </tr>
        <tr>
          <td>Cont/Hr</td>
          <td>This is the average number of Contacts made per hour while logged on. It is calculated by dividing the
            number of Contacts into "LoggedIn" time.</td>
          <td>If you are hitting the dials target, then you should be making around 4 Contacts/Hr.</td>
        </tr>
        <tr>
          <td>Booked/Hr</td>
          <td>This is the average number of Bookings made per hour while logged on. It is calculated by dividing the
            number of Bookings into LoggedIn time.</td>
          <td>An agent should be making at least 0.5 Bookings per Hour, to achieve target.</td>
        </tr>
      </table>

        `
    }
}
window.customElements.define('sop-table1', sopTable1);

/////////////////////////////////////////////////////

class sopTable2 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

<h2>Glossary of Status Codes</h2>
      <table class="standardsOfPerformance">
        <tr>
          <th>Metric</th>
          <th>Definition</th>
          <th>Expected Standard of Performance</th>
        </tr>
        <tr>
          <td>Logged In</td>
          <td>The "loggedIn" time is the total time logged into Genesys, starting from when a user first logs in at the
            beginning of their shift, and stops when the user shuts down Genesys at the end of their shift.</td>
          <td>Logged in should be 8 Hrs and 30 Mins - Full Time.</td>
        </tr>
        <tr>
          <td>CFT</td>
          <td>CFT is your "Customer Facing Time". This is calculated by adding your Interacting time and Idle time
            together, then dividing the total into your logged in time. This metric shows the proportion of your time
            spent available for customers. </td>
          <td>CFT should be a minimum of 80%</td>
        </tr>
        <tr>
          <td>Interacting</td>
          <td>This shows the amount of time spent interacting with clients.</td>
          <td>"Interaction" + "Idle" time makes up your CFT time. You need to be interacting for at least 75 - 80% of your
            shift, to achieve target CFT.</td>
        </tr>
        <tr>
          <td>Idle </td>
          <td>Idle time is the time spent waiting for inbound calls, this is when you are "On-queue" and available for
            clients to call into us.</td>
          <td>Along with "Interacting", this helps to make up your CFT time.</td>
        </tr>
        <tr>
          <td>Not Responding</td>
          <td>When you decline a call, or do not answer within the 30s alert time, the system moves you into a "Not
            Responding" state.</td>
          <td>There shouldn't be any reason to spend time in a non-responsive state. The only exception would be where
            you are experiencing IT issues.</td>
        </tr>
        <tr>
          <td>On-Queue</td>
          <td>This is the time spent on-queue.</td>
          <td>You need to be "On-Queue" to receive calls.</td>
        </tr>
        <tr>
          <td>Off-Queue</td>
          <td>This is the amount of time spent off-queue.</td>
          <td>Only go off queue when you do not wish to receive any further calls.</td>
        </tr>
        <tr>
          <td>Busy</td>
          <td>Busy time includes all the various secondary states that can be selected through the "Busy" sub menu.
            These include "IT issues", "Outbound Call", "Aftercall Work", "Approved Offline Work" etc.</td>
          <td>Spending time in these states will decrease your CFT time. Please notify a manager and post in the group
            chat if you need to go offline.</td>
        </tr>
        <tr>
          <td>Available</td>
          <td>This is the state that shows when you are not on-queue, interacting, or in any of the other offline codes. </td>
          <td>Agents shouldn't spend time in available, as it is a generic offline code which is
            only used as an "in-between" state when moving from one status code to another.</td>
        </tr>
        <tr>
          <td>Away</td>
          <td>This is one of the states that can be selected when an agent goes unavailable. It is used when taking time
            away from the workstation, such as comfort breaks etc.</td>
          <td>This code can be used interchangeably with "Break", but combined "Break" and "Away" time should not exceed
            20 mins per day.</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>This is one of the states that can be selected when an agent goes unavailable. It is used when taking time
            away from the workstation, such as comfort breaks etc.</td>
          <td>This code can be used interchangeably with "Away", but combined "Break" and "Away" time should not exceed
            20 mins per day.</td>
        </tr>
        <tr>
          <td>Meeting</td>
          <td>This is an adhoc state which should only be used when taking offline time approved by your line manager.
            This includes things like team meetings, buzz sessions, or 121's.</td>
          <td>Spending time in meetings will decrease your CFT time, although this is sometimes unavoidable. Please make sure your manager is aware if you need to attend a meeting.</td>
        </tr>
        <tr>
          <td>Meal</td>
          <td>This code should be used for your main daily break.</td>
          <td>The allowance for Meal breaks is 30 minutes for a full time colleague on a 5pm finish. Part timers will
            have their own arrangements.</td>
        </tr>
      </table>

        `
    }
}
window.customElements.define('sop-table2', sopTable2);