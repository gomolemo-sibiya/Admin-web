import "./widget.css";
import { 
    User, 
    ShoppingCartSimple, 
    Wallet, 
    Bank,
} from "phosphor-react";

const Widget = ({ type }) => {
    let data;
    //temporary
    const amount = 100;
    const diff = 20;
    const subtitle = '';

    switch (type) {
        case "user":
            data = {
              title: "Recycling",
              isMoney: false,
              link: "See all users",
              subtitle: "C02 Reduction",
              icon: (
                <User
                  className="icon"
                  style={{
                    color: "#FFFFFF",
                  }}
                />
              ),
            };
            break;
        case "order":
            data = {
                title: "Recycling",
                isMoney: false,
                link: "View all orders",
                subtitle: "C02 Reduction",
                icon: (
                <ShoppingCartSimple
                    className="icon"
                    style={{
                        color: "#FFFFFF",
                    }}
                />
                ),
            };
            break;
        case "earning":
            data = {
                title: "Recycling",
                isMoney: true,
                link: "View net earnings",
                subtitle: "C02 Reduction",
                icon: (
                <Wallet
                    className="icon"
                    style={{ 
                        color: "#FFFFFF" 
                    }}
                />
                ),
            };
            break;
        case "balance":
            data = {
                title: "Recycling",
                isMoney: true,
                link: "See details",
                subtitle: "C02 Reduction",
                icon: (
                <Bank
                    className="icon"
                    style={{
                        color: "#FFFFFF",
                    }}
                />
                ),
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="right">
                {data.icon}
                <span className="title">
                    {data.title}
                </span>
            </div>
            <div className="left">
                <div className="percentage positive">
                    <span className="difference">{diff}%</span>
                    <span className="subtitle">{data.subtitle}</span>
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget