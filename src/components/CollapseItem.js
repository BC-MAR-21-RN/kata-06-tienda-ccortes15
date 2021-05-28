import React, {useState} from 'react';
import {
  Collapse,
  CollapseBody,
  CollapseHeader,
} from 'accordion-collapse-react-native';
import {Text, View} from 'react-native';
import {Icon, TextContainer} from '.';
import {styleCollapse} from '../library/styles';
import {check, chevDown, chevUp} from '../library/constants/icons';
import CardView from 'react-native-cardview';

const CollapseItem = ({data}) => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = isExpanded => setExpanded(isExpanded);

  return (
    <CardView cardElevation={8} cardMaxElevation={8} cornerRadius={5}>
      <Collapse isExpanded={expanded} onToggle={onToggle}>
        <CollapseHeader>
          <View style={styleCollapse.header}>
            <Text style={styleCollapse.textHeader}>Order #{data.order}</Text>
            <Icon
              icon={expanded ? chevUp : chevDown}
              style={styleCollapse.iconCollapse}
            />
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View style={styleCollapse.body}>
            {data.productList.map(item => (
              <View style={styleCollapse.rowProduct}>
                <TextContainer
                  styleView={styleCollapse.flex1}
                  styleText={styleCollapse.text}
                  text={item.name}
                />
                <TextContainer
                  styleView={styleCollapse.flexEnd}
                  styleText={styleCollapse.textGray}
                  text={item.quant + item.measure}
                />
                <TextContainer
                  styleView={styleCollapse.flexEnd}
                  styleText={styleCollapse.text}
                  text={'$' + item.price}
                />
              </View>
            ))}
            <View style={styleCollapse.viewDown}>
              <View style={styleCollapse.rowDirection}>
                <TextContainer
                  styleView={styleCollapse.flex2}
                  styleText={styleCollapse.textGray}
                  text={'Delivery'}
                />
                <TextContainer
                  styleView={styleCollapse.flexEnd}
                  styleText={styleCollapse.text}
                  text={'$4.99'}
                />
              </View>
              <View style={styleCollapse.rowDirection}>
                <View style={styleCollapse.shippedContainer}>
                  <View style={styleCollapse.iconContainer}>
                    <Icon
                      icon={check}
                      style={styleCollapse.iconRounded}
                    />
                  </View>
                  <Text style={styleCollapse.shipped}>Shipped</Text>
                </View>
                <TextContainer
                  styleView={styleCollapse.flexEnd}
                  styleText={styleCollapse.textGray}
                  text={'Total'}
                />
                <TextContainer
                  styleView={styleCollapse.flexEnd}
                  styleText={styleCollapse.text}
                  text={'$14.99'}
                />
              </View>
            </View>
          </View>
        </CollapseBody>
      </Collapse>
    </CardView>
  );
};

export default CollapseItem;
