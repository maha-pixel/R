import React from 'react'
import facilityDetailsStyle from './facility-details.module.scss'

const fields = {
  ltc: [
    {
      title: 'Resident positives',
      field: 'resident_positives',
    },
    {
      title: 'Resident deaths',
      field: 'resident_deaths',
    },
    {
      title: 'Outbreak resident positives',
      field: 'outbreak_resident_positives',
    },
    {
      title: 'Outbreak resident deaths',
      field: 'outbreak_resident_deaths',
    },
    {
      title: 'Staff cases',
      field: 'staff_positives',
    },
    {
      title: 'Staff deaths',
      field: 'staff_deaths',
    },
  ],
  cms: [
    {
      title: 'Collection date',
      field: 'date',
    },
    {
      title: 'Resident total confirmed cases',
      field: 'residents-total-confirmed-covid-19',
    },
    {
      title: 'Resident total suspected cases',
      field: 'residents-total-suspected-covid-19',
    },
    {
      title: 'Resident weekly confirmed cases',
      field: 'residents-weekly-confirmed-covid-19',
    },
    {
      title: 'Resident weekly suspected cases',
      field: 'residents-weekly-suspected-covid-19',
    },
    {
      title: 'Resident total deaths',
      field: 'residents-total-all-deaths',
    },
    {
      title: 'Staff total confirmed cases',
      field: 'staff-total-confirmed-covid-19',
    },
    {
      title: 'Staff total suspected cases',
      field: 'staff-total-suspected-covid-19',
    },
    {
      title: 'Staff weekly confirmed cases',
      field: 'staff-weekly-confirmed-covid-19',
    },
    {
      title: 'Staff weekly suspected cases',
      field: 'staff-weekly-suspected-covid-19',
    },
    {
      title: 'Staff total deaths',
      field: 'staff-total-all-deaths',
    },
  ],
}

const FacilityDetails = ({ facility, layer }) => (
  <>
    <h2>
      {layer === 'cms-cases' || layer === 'cms-deaths' ? (
        <>{facility.name}</>
      ) : (
        <>{facility.facility_name}</>
      )}
    </h2>

    <dl className={facilityDetailsStyle.details}>
      {fields[
        layer === 'cms-cases' || layer === 'cms-deaths' ? 'cms' : 'ltc'
      ].map(({ title, field }) => (
        <div key={field}>
          <dt>{title}</dt>
          <dd>{facility[field] || <>N/A</>}</dd>
        </div>
      ))}
    </dl>
  </>
)

export default FacilityDetails

export { fields }
