import ServiceItem from "./ServiceItem";

const ServiceList = props => (
  <div class="services-list">
    {
      props.serviceList.map(serviceItem => <ServiceItem serviceItem={serviceItem} />)
    }
  </div>
)

export default ServiceList